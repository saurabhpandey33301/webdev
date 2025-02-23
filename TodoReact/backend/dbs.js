const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://admin:saurabh3301@cluster0.xbsbp.mongodb.net/");

//schema bnae hai jaise hmko data ko store krna hai....
const TodoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type : Boolean,
        default : false,
    },
    userId : String
});
//Schema for users
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // Basic email validation regex
    },
    password: {  
        type: String,
        required: true,
        minlength: 6  // Ensure passwords are at least 6 characters long
    }
}, { timestamps: true });  // Adds createdAt and updatedAt fields automatically

const Userr = mongoose.model('TodoUser', UserSchema);



//us schema k hisab se hm nya model bna rhe h 
const todo = mongoose.model("Todos", TodoSchema);

module.exports = {todo , Userr};










