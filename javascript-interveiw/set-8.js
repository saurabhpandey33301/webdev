const saurabh = {
    name : "saurabh pandey",
    sayName : function(){
        console.log(this.name);
        
    },
}

const john = {
    name : "john doe",
    sayName : function(){
        console.log(this.name);
    },
}


function sayMyName(){
        console.log(this.name);
}

//giving the context of saurabh to sayMyName function....
sayMyName.call(saurabh);
//output-> saurabh Pandey

//calling a function from inside a function.....
john.sayName.call(saurabh);
//output -> saurabh Pandey
