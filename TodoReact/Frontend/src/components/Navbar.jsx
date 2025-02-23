import { useEffect, useState } from "react"
import { Navbtn } from "../subcomponents/Navbtn"
import { Link } from "react-router"
import axios from "axios"

export const Navbar = () => {


    const [name , setName] = useState("User")
    

    useEffect(()=>{

        const fetchUser = async()=>{
            const res = await axios.post("http://localhost:3001/user",{},{
                withCredentials: true  
            })
           
            setName(res.data.name)

        }
        fetchUser()
    },[])
   
    return(
        <>
           <div className="bg-gray-800 text-white flex justify-between p-3 border-b-1 border-white rounded-xl ">
                
                <div className="flex" >
                    <div className="mt-2 text-white ">
                           <button  className=" cursor-pointer  p-2 ps-4 pe-4 border-3 border-black 
             hover:border-black hover:bg-lime-300  rounded-xl bg-lime-400 text-xl
             hover:shadow-lg hover:shadow-neutral-50/50 hover:-translate-y-1 transition">
                            <Link to={"/home"} className=" text-black text-bold  ">
                        {"Home"}
                        </Link>
                               
                           </button>
                    </div>
                </div>
                <div className="p-2 ps-20 mt-3 text-3xl flex " >
                     <div className="w-5/6 flex flex-row transform translate-x-20">

                     <h1 className="text-lime-300  ps-2 hover:translate-y-1  hidden md:block " >Here</h1>
                     <h1 className="text-white ps-2 hover:translate-y-1  hidden md:block " >is</h1>
                     <h1 className="text-lime-300 ps-2 hover:translate-y-1  hidden md:block" >Your</h1>
                     <h1 className="text-white ps-2 hover:translate-y-1  hidden md:block " >Personalised</h1>
                     <h1 className="text-lime-300 ps-2 hover:translate-y-1  hidden md:block " >Todos</h1>
                     </div>
                </div>
                <div className="flex justify-around mt-2" >
                <div className="p-2 text-2xl flex  ">
                    <span className="text-md md:text-2xl text-lime-300 pe-2 hover:translate-y-1 transform translate-y-2">Hello</span>
                    <span className=" text-md md:text-2xl hover:translate-y-1 transform translate-y-2 ">{name}</span>
                </div>
                <div >
                    <button className="rounded-full m-2 ps-4 pe-4 pt-2 pb-2 bg-green-400 ">{name[0].toUpperCase()}</button>
                </div>
                <div className="mt-1 text-white m-2">
                           <button onClick={()=>{
                              fetch("http://localhost:3001/logout", {
                                method: "POST",
                                credentials: "include", // Important for sending cookies!
                            })
                            .then(response => response.json())
                            .then(data => {
                                console.log(data.message);
                                alert("logged out successfully") // "Logged out successfully"
                                // Optionally, redirect or update UI
                            })
                            .catch(error => console.error("Error logging out:", error));
                            
                               
                           }}  className=" cursor-pointer  p-2 ps-2 pe-2 border-3 border-black 
             hover:border-black hover:bg-rose-300  rounded-xl bg-rose-400 text-xl
             hover:shadow-lg hover:shadow-neutral-50/50  hover:-translate-y-1 transition">
                            <Link to={"/home"} className=" text-black text-bold  ">
                        {"Logout"}
                        </Link>
                           </button>
                    </div>
                 
                </div>
           </div>
        </>
    )
}