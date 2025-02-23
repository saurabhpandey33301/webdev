

import { Cart } from "../../../components/cart"

export default function(){
    return(
        <div className="flex items-center justify-center h-screen">
            <div className=" bg-gray-300 rounded-md border-2 p-10 border-black  w-[300px] h-[400px]  flex flex-col items-center justify-center  gap-4">
                <div className="p-2 text-black text-3xl font-bold">SignIn</div>
                <div className="p-2"><input type="string" placeholder="username"  className="p-2 border-2 border-black rounded-md" /></div>
                <div className="p-2"><input type="text" placeholder="password" className="p-2 border-2 border-black rounded-md"  /></div>
                <div><button className=" p-2 rounded-md bg-green-500 hover:bg-green-400">signin</button></div>
            </div>
            <div>
                <Cart/>
            </div>
            
        </div>

    )
}