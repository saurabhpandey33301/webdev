//Proxy and Reflect objects in javascript.............

const p1  = {
    fname : "Saurabh",
    lname : "Pandey",
    age : 23,

}

//This is how proxy & reflect is implemented..............

const p1Proxy = new Proxy(p1,{
    get(target,prop){
        if(prop in target) return Reflect.get(target,prop);
        return false;
    },
    set(target,prop,value){
        if(!(prop in target)) throw new Error (`${prop} does not exists`);
        switch (prop){
            case 'fname':
            case 'lname':
                if(typeof value   !== 'string')
                    throw new Error(`${prop} must be a string`);
                break;
            case 'age' :
                if (typeof value !== 'number') {
                    throw new Error(`${prop} must be a number`);
                }
                if(value<=0) throw new Error( `${prop} must be greater then zero`);    
        }
        Reflect.set(target,prop,value);
    }
});

p1Proxy.fname = 22

console.log(p1.age);
console.log(p1Proxy.age);

//I have confusion about reflect (like what actually it is) ?






