//asyncronous code - code that runs in the background without blocking the main thread.
//async always return promise.

//async function example....

// async function getData(){
//     setTimeout(()=>{
//         console.log("saurabh pandey");
//     },3000);
// }

// let output = getData();

//Fetch API
// It provide interface for fetching resources (including across the network).

async function getData(){
    const url = 'https://dummyjson.com/posts/252';
    //get request - async operation.
    const response = await fetch(url); //marked await to make this line sync.
    //parse json - async.
    let data = await response.json(); //marked await to make it sync. 
    console.log("get data response: ",data);
}

async function postData(){
    const url = 'https://dummyjson.com/posts/add';
    //post request - async operation.
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'I am saurabh dada',
            userId: 200,
        })
    });
    let data = await response.json();
    console.log("Post data response: ",data);
    
}

async function processData(){
    await getData();
    await postData();
}

processData();


//  scenerio:
// prepare url/api endpoint -> sync
// await // fetch the data from the api -> network call/request -> async
// process/parse the data -> sync

