variable = 150;

//function have it's own local context in the global execution context....
(()=>{
    foo = 100;
    console.log("variable" , variable);
    console.log("foo",foo);
    var foo = 120;
    variable = 20;
    console.log("variable" , variable);
    
    
})();

//give error .....
console.log("foo",foo);

console.log("variable" , variable);
var variable = 30;
console.log("variable" , variable);



