import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {REACT_APP_API_URL} from "../../url"

export const Navbtn = ({label , to})=>{
    const navigate = useNavigate();
    return(
        <div className="mt-2 text-black ">

            <button onClick={async () => {
    try {
        const res = await axios.post(`${REACT_APP_API_URL}/me`, {}, { 
            withCredentials: true  // ✅ This enables cookies to be sent
        });

        console.log("hello");
        console.log(res.status);

        if (res.status === 200) {  
            navigate(`/dashboard`);

        }else {
            navigate(to);
        }
        } catch (error) {
            console.log(error);
            console.log("error hogya bhai");
            navigate(to);
        }
    }} className="   p-2 ps-4 pe-4 border-3 border-black 
             hover:border-black hover:bg-lime-300  rounded-xl bg-lime-400 text-xl
             hover:shadow-lg hover:shadow-neutral-50/50 hover:-translate-y-1 transition  cursor-pointer "> 
                        {label}
            </button>
            
     </div>
    )
}