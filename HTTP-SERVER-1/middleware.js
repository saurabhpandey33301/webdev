const express = require('express');
const app = express();


app.use(express.json());

let noOfRequests = 0;

// Middleware to log the number of requests.
function requestCounter(req,res,next){
    noOfRequests++;
    console.log(`Number of requests made: ${noOfRequests}`);
    next();
}


// Middleware to check if the user is authenticated.
function authenticationCheck(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username !== 'admin' && password !== 'pass') {
        res.status(403).send('Invalid username or password');    
    }
    next();
}

// Middleware to check if the input is valid.
function inputValidationCheck(req, res, next) {
    const kidneyId = req.query.kidneyId;
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).send('Invalid input');
    }
    next();
}

//app.use() is used to include particular middleware in evert request going to the server that stated down the app.use() line (as global middleware).
//requestCounter is used in both the routes down the line, so we are using it as global middleware.
app.use(requestCounter);

app.get('/healthCheck',  authenticationCheck, inputValidationCheck, (req, res) => {
    console.log('Health check is successful');
    res.send('your kidney is fine');
});

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});