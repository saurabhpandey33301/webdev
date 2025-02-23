//"use client"

import { GET } from "@/app/api/user/route";
import { PrismaClient } from "@prisma/client";


// import { useEffect, useState } from "react"

// export const Cart = ()=>{

//     const [userData, setUserData] = useState();
//     const [loading,setLoading] = useState(true);
    
//     useEffect(()=>{

//         setTimeout(()=>{
//             setLoading(false)
//         },2000)
//     })
//     if(loading){
//         return(
//             <div>
//                 loading...
//             </div>
//         )
//     }
//     return(
//         <div>
//               data...
//         </div>
//     )
// }


//aync way in next.js


// interface DataResponse {
//     email : string,
//     name : string
// }

// const getdata = async (): Promise<DataResponse> => {
//     //do validation
//    //hit database
//    const response = await axios.get<DataResponse>("http://localhost:3000/api/user");
//    return response.data;
// };

//better way to fetch in next...

import {prisma} from "@/db"


const fetchData = async()=>{
    const user  = await prisma.user.findFirst();

    return {
        username: user?.username,
        name: user?.name
    };
}

export const Cart = async()=>{
    const response = await fetchData()
    return(
        <div className="flex flex-col m-2 border-2 border-black p-4 rounded-md bg-yellow-300">
             <div> {response.username}</div>
             <div> {response.name}</div>
        </div>
    )
}