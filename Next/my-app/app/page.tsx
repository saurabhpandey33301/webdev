import Appbar from "@/components/Appbar";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { Next_Auth } from "./lib/auth";


export default async function Home() {
     
     const session = await getServerSession(Next_Auth); 
  return (
         <div>
             <Appbar/>
              <div className="flex items-center justify-center h-screen ">
                    <div className="p-4 bg-red-500 w-full text-center">
                         {JSON.stringify(session)}

                    </div>
              </div>
        


         </div>

      );
}
