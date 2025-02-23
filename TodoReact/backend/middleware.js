// const express = require('express');
// const app = express();
// const {jwtSecretKey} = require("./config")
// const jwt = require("jsonwebtoken");

// const cookieParser =  require("cookie-parser");

// app.use(cookieParser()); 

// const authMiddleware = (req, res, next) => {
//     const token  = req.cookies.token

//     if (!token) {
//         return res.status(403).json({
//             message : "Unauthorized user"
//         });
//     }

//     try {
//         const decoded = jwt.verify(token, jwtSecretKey);

//         req.userId = decoded.userId;

//         next();
//     } catch (err) {
//         return res.status(403).json({
//             message : "Unauthorized user"
//         });
//     }
// };

// module.exports = {
//     authMiddleware
// }