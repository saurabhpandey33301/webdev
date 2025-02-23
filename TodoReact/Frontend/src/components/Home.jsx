import { useEffect, useState } from "react"
import { Appbar } from "../subcomponents/Appbar"
import { backInOut, circInOut, motion } from "framer-motion";


export const Home = ()=>{
    
    const [user,setUser] = useState([]);

    useEffect(()=>{
        
    })

    return(
        <div className="bg-gray-800  w-full min-h-screen  " >
            <Appbar/>

            <div className="mt-20   " >
            <motion.div
            
              initial={{
                opacity: 0,
                rotate : '0deg'

              }}
            
              animate={{
                opacity: 1,
                rotate : '0deg'
              }}
              
              transition={
                {
                    duration : '2',
                    // type : 'spring',
                    // damping : '1',
                    ease : circInOut
                }
              }
            
            className="text-8xl text-white p-2 m-12 flex  rounded-xl  " >
                <h1 className="text-lime-300 ps-4   " > Create </h1>
                <h1 className="text-white ps-4 " >Your </h1>
                <h1 className="text-lime-300 ps-4  " > Own </h1>
               
            </motion.div>
            <div>
            <div className="text-8xl text-white p-2 ms-60 flex  rounded-xl ">
            <h1 className="text-lime-300 ps-4 animate-bounce " > Personalised </h1>
            <h1 className="text-white ps-4  animate-bounce" > Todos </h1>
            </div>
            <div className="text-3xl p-6 text-right me-10 text-neutral-400 hover:mt-1 ">
                (with interactive ui)
            </div>
            </div>

            </div>
         
        </div>
    )
}




