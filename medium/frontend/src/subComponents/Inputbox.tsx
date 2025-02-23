
import { ChangeEvent } from 'react';

interface InputType {
    label : string,
    placeholder : string,
    onChange : (e : ChangeEvent<HTMLInputElement>) => void;
    inputVal : string | undefined ,
    type ? : string;
}

export const Inputbox = ({label,placeholder , onChange ,type ,inputVal } : InputType)=>{
    return (
        <div className="mt-2 text-black dark:text-white">
        <label >
            {label}:
            <br />
            <input value={inputVal} onChange={onChange}  type={type || "text" } placeholder ={placeholder}  className="border-black dark:border-white p-2 mt-2 pr-20 
            rounded-md text-black dark:text-white border-2 focus:border-black focus:dark:border-lime-400 w-full  outline-none " />
        </label> <br />
        </div >
    )
}