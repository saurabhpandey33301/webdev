const saurabh = {
    name : "saurabh pandey",
    sayName : function(){
        console.log(this.name);
        
    },
}

//after 3 sec this doesn't know the 'this' bcz context is changed...
setTimeout(saurabh.sayName, 3*1000);


//.bind is used to bind a context with a function when it is called ...
setTimeout(saurabh.sayName.bind(saurabh), 3*1000);

//or u can use it as a closer function as it refer to the global context....
setTimeout(()=> saurabh.sayName() , 3*1000);


