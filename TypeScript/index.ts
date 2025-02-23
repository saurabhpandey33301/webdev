//npm install -g typescript
//tsc --init
//tsc -b



const x:number = 1;
console.log(x);

//type inference (automatically detect the type of variable)
function greet(firstname: string) : string {
    return `Hello ${firstname}`;
}

console.log(greet('saurabh'));

function sum(a:number, b:number) : number {
    return a+b;
}
console.log(sum(1,2));

function setGreetTimer(fn : ()=> string){
    setInterval(()=>{
        console.log(fn());
    },3000);
}

setGreetTimer(() => greet("ritika"));

interface User{
    name: string;
    age: number;
}
//types let u do union and intersection of types.
type  User2 = {
    name: string;
    age: number;
}

function bdaYaChota(user : User2): void{
    if(user.age>18){
        console.log('bda');
    }else{
        console.log('chota');
    }
}

bdaYaChota({name: 'saurabh', age: 22});

//Array in typescript

let array: number[] = [1,2,3,4,5];

type  Arr = number[];

function printArray(arr : Arr){
    arr.forEach((element)=>{
        console.log(element);
    });
}

printArray(array);

//Enums in typescript

enum Direction{
    Up,
    Down,
    Left,
    Right
}

function move(direction: Direction){
    console.log(direction);
}

move(Direction.Up);

//Generics in typescript  
//it allow us to write a function or class that can work with any data type or any genric type.

function identity<T>(arg: T): T{
    return arg;
}

console.log(identity<number>(1)); 
console.log(identity<string>('saurabh'));

//exporting and importing modules in typescript..........

//exporting module

export const pi = 3.14;

//importing module

//import express from "express";


//Pick in typescript...............

interface User{
    id : number;
    name: string;
    age: number;
    email : string;
    createdAt: Date;

}

// Creating a new type with only `name` and `email` properties from `User`
type UserProfile = Pick<User, 'name' | 'email'>;

// Function that accepts a UserProfile type
const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

//Partial in typescript...............
//to make things optional in typescript......

interface Userr{
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};
// Selecting 'name', 'age', and 'email' properties from User
type UpdateProps = Pick<Userr, 'name' | 'age' | 'email'>

// Making the selected properties optional
type UpdatePropsOptional = Partial<UpdateProps>

// Function that accepts an object with optional 'name', 'age', and 'email' properties
function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database to update the user
}

// Example usage of updateUser
updateUser({ name: "Alice" }); // Only updating the name
updateUser({ age: "30", email: "alice@example.com" }); // Updating age and email
updateUser({}); // No updates, but still a valid call


//Readonly in typescript...............
//to make things readonly in typescript and you cann't make changes in it......

interface Config {
    endpoint: string;
    apiKey: string;
}

const config: Readonly<Config> = {
endpoint: '<https://api.example.com>',
apiKey: 'abcdef123456',
};

// Attempting to modify the object will result in a TypeScript error
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

//Record and Map in typescript...............

// Using Record to type an object with string keys and User values
interface Userrr {
    id: string;
    name: string;
  }
  
  // Using Record to type an object with string keys and User values
  type Users = Record<string, Userrr>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

//Using Map to type a map with string keys and User values
//usually ppl use map over records because map is more flexible and has more methods than records.

interface Usere{
    id: string;
    name: string;
}
  
// Initialize an empty Map with string keys and User values
const usersMap = new Map<string, Usere>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }


//Exclude in typescript...............

type Event = 'click' | 'scroll' | 'mousemove';

// Using Exclude to create a new type without 'scroll'
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

// Function that accepts only 'click' and 'mousemove' events
const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
//handleEvent('scroll'); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.


//Type inference in zod...............

import { z } from 'zod';
import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const result = userProfileSchema.safeParse(req.body);
   
  if (!result.success) {
    res.status(400).json({ error: result.error });
    return;
  }

  // Type of updateBody is inferred from userProfileSchema
  const updateBody : FinalUserSchema  = result.data;

  // update database here
  res.json({
    message: "User updated",
    updateBody
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));

