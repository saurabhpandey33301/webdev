import { MouseEvent } from "react";


interface btnInputType {
    name : string,
     onClick : (e :  MouseEvent<HTMLButtonElement> | undefined) => void;
     type ? : string
}


export const Loginbtn = ({name , onClick  }: btnInputType )=>{
    return(
       <div className="flex justify-center mt-6">
               <button  onClick={onClick} className=" w-full p-2 border-2  border-neutral-50  text-black text-xl 
               rounded-xl bg-blue-500  dark:bg-lime-500 
                hover:bg-blue-400  hover:dark:bg-lime-300   hover:border-black">{name}</button>
       </div>
    )
}