//In javascript everything is an object.....
//very Important .....
//How inheritance works in js ??
// Using -> Prototype && __proto__
//run sample.html file to run this file...

const fname  = "saurabh";

console.log(fname.__proto__);

const obj1  = {
    a: "I am a",
    b : "I am b"
}
const obj2 = {
    __proto__:obj1
}
const obj3 = Object.create(obj1);
console.log(obj2.b);
console.log(obj2);
console.log(obj3.a);



class Person{
    constructor(fname,lname) {
        this.fname = fname;
        this.lname = lname;
    }

}
console.log(Person);

const p1 = new Person("saurabh","Pandey");

console.log(p1);

const p2 = {
    __proto__: Person.prototype
};
p2.fname = "Ritika";

console.log(p1.fname)
console.log(p2.fname)

//difference between __proto__ && prototype...

//__proto__ → refers to an object's internal prototype.
//prototype → is a property of constructor functions and classes in js .

//let str = "Saurabh";
// Behind the scenes:
// str = new String("Saurabh"); // Temporary wrapper object(auto-boxing)
// str.toUpperCase(); // Works!
// Then it throws away the wrapper.

//===========================================================================================
//"Saurabh" -> primitive data type string not an object...
//but after autoboxing(wrapping) in String object......
//str  = new String("Saurabh")
//str now became an object which have __proto__
//so js makes everything an object...that's why we say in js everything a object.
//============================================================================================

// That’s why primitives act like objects temporarily, but they are not actual objects.



