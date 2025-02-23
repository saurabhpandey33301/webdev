import { useEffect, useState } from 'react'
import {REACT_APP_API_URL} from "../../url"
const counter =1;
export function CreateTodo (){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
   
    return (
        <div className='items-center flex justify-center p-8  mt-10  m-6 p-2 bg-gray-500 border-3 
        border-neutral-50 rounded-xl hover:border-lime-400 hover:shadow-lg hover:shadow-neutral-50/80'>
            <div  >

           <input className='rounded-md border-2 border-white bg-gray-200 p-4 m-2' type="text" placeholder="title" value={title}  onChange={(e)=>{
            
                setTitle(e.target.value);
           }}></input><br />
           <input  className='rounded-md border-2 border-white bg-gray-200 p-4 m-2' type="text" placeholder="description" value={description} onChange={(e)=>{
               
                setDescription(e.target.value);
           }}></input> <br />
           <div className='flex justify-center'>
           <button className='rounded-xl border-2 border-neutral-50 bg-lime-500 p-4 m-2 
            hover:bg-lime-400 hover:border-black'  onClick={ () => {
                if (!title || !description) {
                    alert("Please enter a title and description!");
                    return;
                }
                fetch(`${REACT_APP_API_URL}/todo`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description,
                    }),
                    credentials: "include"  // Properly use 'credentials' for withCredentials
                })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();  // You need to wait for the JSON response
                })
                .then((data) => {
                    alert("Todo added");
                    setTitle("");  // Clear the input fields
                    setDescription("");
                    console.log("Response Data:", data);  // Log the actual response data
                })
                .catch((error) => {
                    console.log("Error:", error);  // Handle errors
                })
            }}

                >Add Todo</button>
           </div>
            </div>
                   
        </div>
        
    )
}

//here u can see how to fetch a post request to the backend server 
// and add a todo to the database.