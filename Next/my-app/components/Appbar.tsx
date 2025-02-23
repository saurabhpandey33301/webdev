"use client"

import { signIn , signOut} from "next-auth/react"
import { useSession } from "next-auth/react"


export default function Appbar(){
    const session = useSession();
       return(
        <div className="flex flex-col">

          <div>
            <div className="p-3 text-3xl font-bold relative  z-30 w-full h-15 rounded-md border-2 border-black bg-green-500 flex justify-between">
          
          <div className="transform translate-y-3 text-4xl">
          Navbar
          </div>
          <div className="flex gap-2">
             <div>
                <button className="border-2 border-black p-2 rounded-md" onClick={()=>{
                    signIn()
                }}>
                  Signin
                </button>
             </div>
             <div>
                 <button className="border-2 border-black p-2 rounded-md" onClick={()=>{
                    signOut()
                 }}>
                  Logout
                 </button>
             </div>
          </div>
            </div>
          
          </div>
          <div className="bg-yellow-300 text-5xl mt-10" >
               
                {JSON.stringify(session.data?.user)}
            </div>
        </div>

       )
}