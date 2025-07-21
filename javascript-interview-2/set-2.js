//objects in javascript.....


//Object literals...
const person = {
    fname : "saurabh",
    lname : "Pandey",
    age : "23",
    getName : ()=>{
        return "Watasiwa namaiwa Kira yosikage da!" 
    },
}

//console.log(person.age);
//console.log(person.getName());


//normal function -> camelCasing (getName)
//constructor function -> PascalCasing (GetName)

//constructor function is used in old js to make multiple objects....
function Person(fname,lname , age){
      this.fname = fname,
      this.lname = lname,
      this.age = age,
      this.getName = ()=>{
          console.log(`hi I am ${this.fname} !`);
          
      }
}

const person1 = new Person("saurabh","pandey",'23');
const person2 = new Person("Ritika","pandey",'19');
const person3 = new Person("Pankaj","pandey",'27');

console.log(person1.fname);
console.log(person2.fname);
console.log(person3.fname);
person1.getName();
person2.getName();

//In new js (ES6) , we use Class .......(same same but different ....😁😁)

class Insaan {
    constructor(fname,lname,age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getName(){
        console.log(`hi I am ${this.fname} ${this.lname}`);
        
    }
}

const p1 = new Insaan("Saurabh","Pandey","23");

console.log(p1.fname);
p1.getName();







