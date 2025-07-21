const obj = Object.create ({
    height : 30 ,
});

console.log(obj.height);

delete obj.height;

console.log(obj.height);

//object.create  value ko prototype me dal deta hai jiske karan uspe delete work nhi krta... 

