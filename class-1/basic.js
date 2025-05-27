console.log("Starting with JavaScript");

//var is function scoped, global scoped but not block scoped.
//var can be redeclared and updated.
var age = 20;
console.log(age);

function xyz(){
    age = 30;
    console.log(age);
}
xyz();

//let is block scoped.
//let can be updated but not redeclared.
{
    let age = 40;
}
console.log(age);

//const is block scoped also.
//const can't be updated and redeclared.
//const is used for which remain same throughout the program.
const pi = 3.14;
{
    const pi = 3.141;
    console.log(pi);
}
console.log(pi);

//function in js..........................................................................
//function is a block of code that can be called by name.
//function can take parameters and return value.
// function can be called by name , refrence , value , constructor , apply , 
// call and bind , arrow function , generator function , function expression.


//function syntax.
//function name(parameters) {
//    code block
//}


//function declaration.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("saurabh"));

//function in js can be defined in two ways. 
//first is function declaration and second is function expression.
//function declaration is hoisted and can be called before defining it.
//function expression is not hoisted and can't be called before defining it.
//function expression can be anonymous or named.
//function expression can be assigned to a variable such as const, let or var.
//example of function declaration is above.
//example of function expression is below.

//function expression.
const greetFunc = function(name) {
    return `Hello, ${name}!`;
}

// Example of anonymous function expression.
const sum = function(a, b) {
    return a + b;
}
console.log(sum(2, 3));

// Example of named function expression
const multiply = function multiplyFunc(a, b) {
    return a * b;
};
console.log(multiply(2, 3));

//closure in js.........................................................................

// closure is a function that has access to its own scope, the outer function's scope, and the global scope.
//closure is created when a function is defined inside another function.
//closure is a function which is bounded to all the refrences or the refrences in its lexical environment.

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }
    outerVariable = 'I am changed from outer function'; // Modifying outerVariable
    // The inner function can still access the modified outerVariable.

    return innerFunction; // Returning the inner function
}

const closureFunction = outerFunction(); // closureFunction now holds the innerFunction
closureFunction(); // Calling the closureFunction, which accesses outerVariable




//classes and default parameters in js..........................................................................
//class is a blueprint for creating objects.

//class syntax.
//class name {
//    constructor(parameters) {
//        code block
//    }
//}

//class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('saurabh', 20);
console.log(person1);

//default parameters in js.
//default parameters are the parameters which have default value.
//if no value is passed to the parameter then default value is used.

function greetDefault(name = 'saurabh') {
    return `Hello, ${name}!`;
}

console.log(greetDefault());

//important notes..........................................................................

//V8 is not strictly a "compiler" but rather a JavaScript engine that utilizes a Just-In-Time (JIT) compiler,
//to convert JavaScript code into native machine code.
