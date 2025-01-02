let firstPromise = new Promise((resolve, reject)=>{
    
    // setTimeout(()=>{
    //      console.log("saurabh pandey");
    // },15000);
    // resolve("hello");
    let success = true;
    if(!success){
        resolve("resolved");
    }else{
        reject("rejected");
    }
});

//then and catch are the methods of promise object.

firstPromise.then((message)=>{
    console.log("Then ka message: "+message);
}).catch((error)=>{
    console.log("Catch ka message (error) : "+error);
});

let p1 = new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,"First");
});
let p2 = new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,"Second");
});
let p3 = new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,"Third");
});

Promise.all([p1,p2,p3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log("error in : "+error);
});

