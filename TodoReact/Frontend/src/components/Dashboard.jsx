import axios from "axios";
import { useEffect, useState } from "react";
import { Todos } from "./Todo";
import { CreateTodo } from "./CreateTodo";
import { Navbar } from "./Navbar";
import { data, useSearchParams } from "react-router";


import {REACT_APP_API_URL} from "../../url"

export const Dashboard = () => {
   
  
    
  
    const [todos, setTodos] = useState([]);
    
    //use effect k chlte jb jb todos update hoga tb tb site  re-render hoga...
    useEffect(() => {
        //u can use set timeInterval here to make site re-render after some interval.....
        axios.get(`${REACT_APP_API_URL}/todos` , {
            withCredentials: true 
        }
        )
        .then( Response =>{
            setTodos(Response.data.todos);
        })
    },[todos]  );
        return(
            <div  className="bg-gray-800    flex flex-col  min-h-screen">
                    <div  >
                       
                        <Navbar />
                        <CreateTodo  />
                       
                            
                       
                        <div className="overflow-hidden m-4">
                           <Todos   todos = {todos}></Todos>
                        </div>
                    </div>
            </div>
        )
}