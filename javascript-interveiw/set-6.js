for (var index = 0; index < 10; index++) {
    setTimeout(()=>{ console.log(index),0 });
}
//let create new variable for each execution....
for (let index = 0; index < 10; index++) {
    setTimeout(()=>{ console.log(index),0 });
}

//setTimeout is async it will start it's execution after whole syncronous program execution is finished...
