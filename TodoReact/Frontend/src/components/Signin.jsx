import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { Inputbox } from "../subcomponents/Inputbox";
import { Loginbtn } from "../subcomponents/Loginbtn";
import { Footer } from "../subcomponents/Footer";
import axios from "axios"

export const Signin = ()=>{
    const [Email,SetEmail] = useState("")
    const [Pass,SetPass] = useState("")
    const navigate = useNavigate();
    return(
        <div className="bg-gray-800 min-h-screen flex flex-col  ">
        <div className="flex items-center justify-center h-screen">
            <div className="border rounded-xl border-3 border-neutral-50 
                    p-2 m-2 bg-purpule-950 items-center hover:border-lime-400 
                     hover:shadow-lg hover:shadow-neutral-50/50 p-4 ">
                 <div className="text-3xl text-white decoration-8 text-center font-bold">SignIn</div>
                 <div className="mt-1 mb-5 text-center text-white">Enter your credentials here !</div>
                 <div>
                    <Inputbox onChange={e=>{
                        SetEmail(e.target.value)
                    }} placeholder={"spandey3301@gmail.com"} label={"Email"}  />
                    <Inputbox onChange={e=>{
                        SetPass(e.target.value)
                    }} placeholder={"123456"} label={"Pass"} />
                    <Loginbtn onClick={async()=>{
                        try {
                        const response = await axios.post("http://localhost:3001/Signin",{
                            email : Email,
                            password : Pass,
                        }, {
                            withCredentials: true
                        });
                            
                                                                              
                            if(response){
                                // navigate("/dashboard?id="+ response.data.id + "&name=" + response.data.name )
                                navigate("/home")
                            }
                        } catch (error) {
                            alert(error.message);
                            console.log(error.message);
                        }
                    }} name={"SignIn"} />
                 </div>
                 <Footer mssg={"Don't have an account?"} liinked={"Register here"} to={"/signup"}/>
            </div>
        </div>
         
        </div>        
    )
}