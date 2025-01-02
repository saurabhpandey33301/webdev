const express = require('express')  //this imports the express module into your file.
const app = express()    //this initializes the express server just like a function
const port = 3000  //local port number where your server will run.

//get request to the root URL of the server.
// app.post('/conver', (req, res)=> {
//     console.log(req.body);
//     console.log(req.headers["authorization"]);
//   res.send({
//     msg:'2+2=4'
//   })
// })

app.get('/',(req,res)=>{
    res.send('Hello World');
})

//post request to the root URL of the server.
app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})

//To run the server, you need to run the command node index.js in the terminal.
//You can access the server by visiting http://localhost:3000 in your browser.

 