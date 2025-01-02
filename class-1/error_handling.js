console.log('welcome to error handling in js');

// Error handling in js...............................................................................
// Error handling is the process of catching errors and handling them gracefully.
// In js, error handling is done using try, catch, finally and throw keywords.
// try block is used to wrap the code that might throw an error.
// catch block is used to handle the error.
// finally block is used to execute the code after try and catch blocks.
// throw keyword is used to throw an error.

//syntax of try, catch and finally block.
//try {
//    code block
//} catch(error) {
//    code block
//} finally {
//    code block
//}

//example of error handling in js.

try{
    console.log(x);
}catch(error){
    console.log("we are in catch block");
    //console.log("The error is : ",error);
    console.log(error.name);
    console.log(error.message);
    throw new Error("Phle declare krna hota hai");
}finally{
    console.log("I will execute no matter what");
}

//throw keyword in js.
//throw keyword is used to throw an error.
//throw keyword is used to throw a user-defined error.

