const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const zod = require('zod');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:saurabh3301@cluster0.xbsbp.mongodb.net/");
app.use(express.json());

const user = mongoose.model('Users',{name: String, email : String , pass: String});

//creating ...........................................
app.post('/signUp', async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;

    const existingUser = await user.findOne({email : email});
    if(existingUser){
        res.status(400).json({"msg" : "existing user"});
    }else{
        const newUser = new user({
            name:name,
            email:email,
            pass : pass
        });
        newUser.save();
        res.json({
            "msg" : "user created succefully"
        })
    }
})

app.listen(3000, ()=>{
    console.log("server running at port 3000");
});