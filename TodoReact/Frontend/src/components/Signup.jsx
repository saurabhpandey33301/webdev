import {  useNavigate } from "react-router-dom";
import { Inputbox } from "../subcomponents/Inputbox";
import { Loginbtn } from "../subcomponents/Loginbtn";
import { Footer } from "../subcomponents/Footer";
import { useState } from "react";
import axios from "axios";

export const Signup = ()=>{
    const [firstName,SetFirstName] = useState("")
    const [lastName,SetLastName] = useState("")
    const [email,SetEmail] = useState("")
    const [pass,SetPass] = useState("")
    const navigate = useNavigate();

    return(
        <div className="bg-gray-800 min-h-screen flex flex-col  ">
          
        <div className="flex items-center justify-center h-screen">
        {/* email is {pass} */}
            <div className="border rounded-xl border-3 border-neutral-50 
                    p-2 m-2 bg-purpule-950 items-center hover:border-lime-400 
                     hover:shadow-lg hover:shadow-neutral-50/50 p-5">
                 <div className="text-3xl decoration-8 text-center font-bold text-white">SignUp</div>
                 <div className="mt-1 mb-5 text-center text-white">Regester here !</div>
                 <div>
                    <Inputbox onChange={e=>{
                         SetFirstName(e.target.value)
                    }} placeholder={"saurabh"} label={"First Name"} />
                    <Inputbox onChange={e=>{
                        SetLastName(e.target.value)
                    }} placeholder={"Pandey"} label={"Last Name"} />
                    <Inputbox onChange={e=>{
                        SetEmail(e.target.value)
                    }} placeholder={"spandey3301@gmail.com"} label={"Email"} />
                    <Inputbox  onChange={e=>{
                        SetPass(e.target.value)
                    }} placeholder={"123456"} label={"Pass"} />
                    <Loginbtn onClick={ async()=>{
                        const response = await axios.post("http://localhost:3001/Signup",{
                            email : email,
                            firstName : firstName,
                            lastName : lastName,
                            password : pass,
                        },{
                            withCredentials: true
                        });
                        // localStorage.setItem("token", response.data.token)
                        // localStorage.setItem("user", JSON.stringify({
                        //     token: response.data.token,
                        //     id: response.data.id,
                        //     name: response.data.firstName
                        // })); 
                        if(response){
                            // navigate("/dashboard?id="+ response.data.id + "&name=" + response.data.firstName )
                            navigate("/home")
                        }
                    }} name={"SignUp"} />
                 </div>
                 <Footer mssg={"Already have an account?"} liinked={"Login here"} to={"/signin"} />
            </div>
        </div>
         
        </div>        
    )
}