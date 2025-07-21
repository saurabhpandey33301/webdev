var fullname = " saurabh pandey ";

var obj = {
    fullname : "hacked full name",
    prop : {
        fullname : "Inside prop",
        getFullname : function(){
            return this.fullname;
        },
    },
    getFullname : function(){
        return this.fullname;
    },
    //this will give undefined bcz this in arrow function refer to the window object/ global object.....
    getFullnameV2: () => this.fullname,
    
    //getFullnameV3 is not a function but a property because iife vale is computed and assigned to it.
    getFullnameV3 : (function(){
        //return  this.fullname;
        return "saurabh pandey";
    })(),
}

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
//console.log(obj.getFullnameV3());
console.log(obj.getFullnameV3);



