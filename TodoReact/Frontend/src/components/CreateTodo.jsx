import { useState } from 'react'
const counter =1;
export function CreateTodo (){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <div>
           <input style={{
                padding : "10px",
                margin : "10px",
           }} type="text" placeholder="title" onChange={(e)=>{
                const value = e.target.value;
                setTitle(e.target.value);
           }}></input><br />
           <input style={{
                padding : "10px",
                margin : "10px",
           }}  type="text" placeholder="description" onChange={(e)=>{
                const value = e.target.value;
                setDescription(e.target.value);
           }}></input> <br />
           <button style={{
                padding : "10px",
                margin : "10px",
           }} onClick={ () => {
               fetch("http://localhost:3000/todo", {
                   method : "POST",
                   headers : {
                       "Content-Type" : "application/json"
                   },
                   body : JSON.stringify({
                       id : counter,
                       title : title,
                       description : description,
                   })
               })
                    .then( async (res)=>{
                        const json = await res.json();
                        alert("Todo added");
                    })
           }}>Add Todo</button>
                   
        </div>
        
    )
}

//here u can see how to fetch a post request to the backend server 
// and add a todo to the database.