const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { createSchema, updateSchema, userType, UserSignType } = require('./types');
const { todo, create, User, Userr } = require('./dbs');
const { jwtSecretkey } = require('./config');

const path = require("path")
const cookieParser =  require("cookie-parser");
const { mongo, default: mongoose } = require('mongoose');

app.use(cookieParser())
app.use(express.json());
//u can simply leave it empty.It will allow all the requests from all the origins
app.use(cors({
    credentials : true,
    origin : "http://localhost:5173"
}))

const port = 3001;


const authMiddleware = (req, res, next) => {
    const token  = req.cookies.token
    console.log(token)
    if (!token) {
        return res.status(403).json({
            message : "Unauthorized user"
        });
    }

    try {
        const decoded = jwt.verify(token, jwtSecretkey);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({
            message : "**Unauthorized user"
        });
    }
};


app.post('/todo', authMiddleware ,  async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createSchema.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(400).json({
            message: parsedPayload.error,
        });
        return;
    }
    //put in mogodb
    try {
        const newTodod = new todo({
            title : parsedPayload.data.title,
            description : parsedPayload.data.description,
            userId  : req.userId
        });
        await newTodod.save()
        .then(()=>{
            return res.status(200).json({message : "Todo added"});
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            message : "error while adding todos"
        })
    }

});

app.get('/todos' , authMiddleware , async (req,res)=>{
     
    const todos = await todo.find({ userId : req.userId});
    //console.log(todos);
    res.json({
        todos
    });
});

app.put('/completed', authMiddleware ,  async(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateSchema.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(400).json({
            msg: parsedPayload.error.format(),
        });
        return;
    }

    try {
        await todo.updateOne({
            _id : req.body.id,
        }, { $set: { completed: true } }); // Update
         
        return res.json({
            msg : "Todo marked as completed",
        });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server issue", error: error.message });
    }

});

app.delete("/delete" , authMiddleware ,async(req,res)=>{
      const deletePayload = req.body;
      const parsedPayload = updateSchema.safeParse(deletePayload);
        if(!parsedPayload.success){
            res.status(400).json({
                msg: parsedPayload.error.format(),
            });
            return;
        }
        try {
            const result = await todo.deleteOne({ _id: req.body.id });

            if (result.deletedCount === 0) {
                // If no document was deleted
                res.status(404).json({
                    msg: "Todo not found",
                });
                return;
            }
            return res.json({
                msg : "Todo deleted",
            });
            
        } catch (error) {
            console.log("Error",error);
        }
})

app.post("/Signup", async(req,res)=>{

    const userpayload =  req.body;
    const parsedPayload = userType.safeParse(userpayload);
    if(!parsedPayload.success){
        return res.status(400).json({
            message: parsedPayload.error.format(),
        });
        
    }
    const existingUser = await Userr.findOne({
        email: parsedPayload.data.email
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }
    try {
        const newUserrr = new Userr({
            firstName : parsedPayload.data.firstName,
            lastName : parsedPayload.data.lastName,
            email : parsedPayload.data.email,
            password : parsedPayload.data.password
        }) 
        await newUserrr.save()
        const userId = newUserrr._id;
        const token = jwt.sign({
            userId
        }, jwtSecretkey );

        res.cookie("token", token, {
            httpOnly: true, // Prevents client-side access
            secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
            sameSite: "strict", // Prevents CSRF attacks
        });
        
        return res.status(200).json({
            message:"User created succesfully",
        })

    } catch (error) {
        console.log(error)
    }
    
})

app.post("/Signin", async(req,res)=>{
    const userpayload = req.body;
    const parsedPayload = UserSignType.safeParse(userpayload);
    if(!parsedPayload.success){
        return res.status(400).json({
            message:"Incorrect inputs"
        })
        
    }
    const existingUser = await Userr.findOne({
        email: parsedPayload.data.email,
        password : parsedPayload.data.password,
    })
    
    const userId = existingUser._id

    if (existingUser) {
        const token = jwt.sign({
            userId
        }, jwtSecretkey );

        res.cookie("token", token, {
            httpOnly: true, // Prevents client-side access
            secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
            sameSite: "strict", // Prevents CSRF attacks
        });
        

        return  res.status(200).json({
            message : "Logged In succesfully",
        })
    }
    return res.status(411).json({
        message: "Error while logging in"
    })

})

app.post("/me", authMiddleware ,(req,res)=>{
    
    console.log(req.userId);
    
    return res.status(200).json({
        message : "verified"
    })


})

app.post("/logout", authMiddleware,   (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false, // Set to true in production
        sameSite: "strict",
    });
    return res.status(200).json({ message: "Logged out successfully" });
});

app.post("/user", authMiddleware, async(req,res)=>{
    const id = req.userId;
    const user = await Userr.findOne({
        _id : id
    })
    res.json({
        name : user.firstName
    })
})

app.listen(port, () =>{
    console.log(`server is running on on port ${port}`);
})