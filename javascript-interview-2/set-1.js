//asyncronous nature of javascript(call stack, task/callback queue , microtask queue , Event loop ,Starvation)

console.log("Start of script");

setTimeout(()=>{
    console.log("I am a setTimeOut Function");
    
},0);

Promise.resolve().then(()=>{
    console.log("I am resolved promise function");
    
})



console.log("end of script");

