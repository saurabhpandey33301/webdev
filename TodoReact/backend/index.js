const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { createSchema, updateSchema } = require('./types');
const { todo } = require('./dbs');

app.use(express.json());
//u can simply leave it empty.It will allow all the requests from all the origins
app.use(cors({
    origin : "http://localhost:5173"
}))
const port = 3000;


app.post('/todo', async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createSchema.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(400).json({
        msg : "Invalid input",
        });
        return;
    }
    //put in mogodb
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false,    
    })

});

app.get('/todos' , async (req,res)=>{
    const todos = await todo.find({});
    //console.log(todos);
    res.json({
    todos
    });
});

app.put('/completed', async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateSchema.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(400).json({
            msg : "something went wrong",
        });
        return;
    }

    await todo.update({
        _id : req.body.id,
    },{
        completed : true,
    });
     
    res.json({
        msg : "Todo marked as completed",
    })
});


app.listen(port, () =>{
    console.log(`server is running on on port ${port}`);
})