const express = require('express');
const app = express();

const zod = require('zod');

app.use(express.json());

//const schema = zod.array(zod.number());

//Typically how zod works and validates the input.
function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
    })
    const response = schema.safeParse(obj);
    console.log(response);
}


validateInput({
    email:"saurabh@gmail.com",
    password:"jsdjdsd"
});

// app.post('/health',(req,res)=>{
//     //kidney -> 1 or 2.
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     res.send({
//         response
//     });
// });

// app.listen(3000, () => {    
//     console.log('Server is running on port 3000');
// });