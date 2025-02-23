"use client"

import { signup } from "@/app/actions/user";
import axios from "axios";
import { headers } from "next/headers";
import { useState } from "react"


export default function(){

    const [name,setName] = useState("");
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    // const handler = async()=>{
    //       const response = await axios.post("http://localhost:3000/api/user",{
    //             name : name,
    //             username : username,
    //             password : password  
    //       })
    //       setName("")
    //       setPassword("")
    //       setUserName("")
        
    // }
    return(

        <div className="flex items-center justify-center h-screen">
                    <div className=" bg-gray-300 rounded-md border-2 p-10 border-black  w-[300px] h-[400px]  flex flex-col items-center justify-center  gap-4">
                        <div className="p-2 text-black text-3xl font-bold">SignUp</div>
                        <div className="p-2"><input type="string" placeholder="name"  
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                        className="p-2 border-2 border-black rounded-md" /></div>
                        <div className="p-2"><input type="string" placeholder="username" 
                        value={username}
                           onChange={(e)=>{
                            setUserName(e.target.value)
                        }}
                         className="p-2 border-2 border-black rounded-md" /></div>
                        <div className="p-2"><input type="text" placeholder="password"
                        value={password}
                         onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                         className="p-2 border-2 border-black rounded-md"  /></div>
                        <div><button 
                        onClick={()=>{
                            const res = signup(username,password,name);
                            setName("")
                            setPassword("")
                            setUserName("")
                            console.log(res)
                        }}
                        className=" p-2 rounded-md bg-green-500 hover:bg-green-400">signup</button></div>
                    </div>
                   
                    
        </div>
    )
}