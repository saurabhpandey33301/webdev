import { BlogCarts } from "../components/BlogCarts"

import { RecoilRoot } from "recoil";


export default function  Blog (){
    return (
        <div className=" bg-white  dark:bg-gray-700  min-h-screen " > 
            
             
             <RecoilRoot>
                <BlogCarts />
               </RecoilRoot>
        </div>
    )
}