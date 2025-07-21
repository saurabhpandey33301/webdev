myFun();

var  myFun = function(){
    console.log("this is function expression");
}

myFun();

function myFun(){
    console.log("this is function declaration");
    
}

myFun();

//function declearation are hoisted but function expression are not it will give typeError.
//memory phase...
//var myFunc = undefined
//var myFunc = fn(){"func decleartion"}
//var myFunc = fn(){"func expression"}
//var myFunc = fn(){"func expression"}
