const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://admin:saurabh3301@cluster0.xbsbp.mongodb.net/");

//schema bnae hai jaise hmko data ko store krna hai....
const TodoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type : Boolean,
        default : false,
    }
});

//us schema k hisab se hm nya model bna rhe h 
const todo = mongoose.model("Todos", TodoSchema);

module.exports = {todo};










