const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const zod = require('zod');

app.use(express.json());

const jwtPassword = '123456';

//local storage........
const ALL_USERS =[
    {
        email:"spandey3301@gmail.com",
        password: "123456",
        name: "saurabh pandey"
        
    },
    {
        email:"rp3301@gmail.com",
        password: "29062006",
        name: "ritika pandey"
          
    }

];



//Input-vadation check function....
function valdationCeck(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(6),
    })
    const response = schema.safeParse(obj);
    return response.success;
}

//Authentication check function......
function userExist(email,password){
    //writing some logic to check if the user exists or not.
    let userExist = false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].email == email && ALL_USERS[i].password == password){
            userExist = true;
        }
    }
    return userExist;
}


app.post('/signIn',(req,res)=>{
    const email = req.body.email;
    const password  = req.body.password;
    
    //input-validation check call....
    if(!valdationCeck(req.body)){
        res.status(403).json({msg:'Invalid input'});
    }
    //authorization check call....
    if(!userExist(email,password)){
        res.status(403).json({msg:'User does not exist'});
    }
    //token conversion and returing token...
    var token = jwt.sign({email:email},jwtPassword);    //jwt to sign in.
    return res.json({ token:token });
});

app.get('/Users',(req,res)=>{
     const token  = req.headers.authorization;
     try{
        //verifying token.
        const decoded = jwt.verify(token,jwtPassword);  //jwt to verify it.
        const email = decoded.email;
        res.json({
            users:ALL_USERS.filter((value)=>{
                if(value.email == email){
                    return false;
                }else{
                    return true;
                }
            }),
         })
     }catch(error){
        res.status(403).send("Verification fails");
     }
     
});   


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});