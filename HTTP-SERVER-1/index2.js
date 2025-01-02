const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());  // Middleware to parse JSON //to extract the body portion of an incoming request stream and expose it on req.body



app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World');
});

app.listen(3000, () => {    
  console.log('Server is running on port 3000');
});