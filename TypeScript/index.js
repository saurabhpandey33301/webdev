"use strict";
const x = 1;
console.log(x);
//type inference (automatically detect the type of variable)
function greet(firstname) {
    return `Hello ${firstname}`;
}
console.log(greet('saurabh'));
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
function setGreetTimer(fn) {
    setInterval(() => {
        console.log(fn());
    }, 3000);
}
setGreetTimer(() => greet("ritika"));
function bdaYaChota(user) {
    if (user.age > 18) {
        console.log('bda');
    }
    else {
        console.log('chota');
    }
}
bdaYaChota({ name: 'saurabh', age: 22 });
//Array in typescript
let array = [1, 2, 3, 4, 5];
function printArray(arr) {
    arr.forEach((element) => {
        console.log(element);
    });
}
printArray(array);
//Enums in typescript
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function move(direction) {
    console.log(direction);
}
move(Direction.Up);
//Generics in typescript  
//it allow us to write a function or class that can work with any data type or any genric type.
function identity(arg) {
    return arg;
}
console.log(identity(1));
console.log(identity('saurabh'));
