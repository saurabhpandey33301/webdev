const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const zod = require('zod');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:saurabh3301@cluster0.xbsbp.mongodb.net/");

const user = mongoose.model('Users',{name: String, email : String, password : String});

const u1 = new user({name: 'pussy' , email: "pussy.com" , password : "pussy123"});
u1.save().then(()=> console.log('new pussy'));

