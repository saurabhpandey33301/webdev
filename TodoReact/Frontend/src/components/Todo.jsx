import axios from 'axios';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import {REACT_APP_API_URL} from "../../url"

export function Todos({todos}){

       const ref = useRef(null);

       return(
           <motion.div   ref={ref}  className='  p-10 w-full h-full overflow-hidden  '>
          <motion.div className=" grid grid-cols-2  sm:grid-cols-3  md:grid-cols-4  lg:grid-cols-5 " >
              {todos.map((todo)=>{
                    return <motion.div key={todo._id}  style={{ cursor: 'grab' }} drag dragConstraints = {ref} className="border rounded-xl border-3 border-neutral-50 
                    p-2 m-2  bg-slate-800  items-center hover:border-lime-400 
                     hover:shadow-lg hover:shadow-neutral-50/50 ">
                      
                        <h1 className="rounded-md border-2 border-black p-2 bg-neutral-200 
                        text-center m-1 mt-4 " >{todo.title}</h1>

                        <h4 className="rounded-md border-2   border-black  p-2 bg-neutral-400
                         text-center m-1 mt-4 " >{todo.description}</h4>
                        
                        <div className="flex justify-around">
                            <button className="rounded-md border-2 border-neutral-50
                             p-2 bg-lime-500 text-center  
                            mt-8 mb-8 hover:bg-lime-400 hover:border-black cursor-pointer" 

                             onClick={async()=>{
                                try {
                                    const response = await axios.put(`${REACT_APP_API_URL}/completed`,{
                                        id : todo._id
                                    }, {
                                        withCredentials: true 
                                    })
                                    console.log("Todo updated:", response.data);
                                } catch (error) {
                                    console.log("Error",error);
                                }
                             }}
                            >
                                {todo.completed === true ? "Completed" : "Mark as Completed"}
                            </button>
                            <button className="rounded-md border-2 border-neutral-50  p-2 bg-lime-500 text-center  
                            mt-8 mb-8 hover:bg-lime-400 hover:border-black cursor-pointer" 
                             onClick={async()=>{
                                try {
                                    console.log("Deleting",todo._id);
                                    const response = await axios.delete(`${REACT_APP_API_URL}/delete`, {
                                        data: { id: todo._id }, // ✅ Pass the payload under 'data'
                                        withCredentials: true    // ✅ Ensure cookies are sent
                                    });

                                    if(response){
                                        alert("todo deleted")
                                        window.location.href("/dashboard");  //
                                    }

                                    console.log("Todo deleted:", response.data);
                                } catch (error) {
                                    console.log("Error",error);
                                    
                                }
                             }}>
                                Delete
                            </button>
                        </div>
                    </motion.div>
              })}
          </motion.div>
          </motion.div>  

       )
}