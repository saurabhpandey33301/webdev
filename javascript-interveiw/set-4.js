var variable = 10;

(()=>{
    console.log(variable);

    variable = 20;

    console.log(variable);
    
    
})(); //iife -> immediately invoked function expression...

console.log(variable);

var variable = 30;

console.log(variable);

//memeory pahse ....
//var variable =undefined
//var variable = 10;
//var variable = 20;
//var variable = 20;
//var variable = 30;
// bcz var is globally scoped.....
//var is hoisted and initilized with undefined...
