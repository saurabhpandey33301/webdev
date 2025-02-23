export const Loginbtn = ({name,onClick})=>{
     return(
        <div className="flex justify-center mt-8">
                <button onClick={onClick}  className=" w-full p-2 border-2  border-neutral-50  text-black rounded-xl bg-lime-400 
                 hover:bg-lime-300  hover:border-3 hover:border-black">{name}</button>
        </div>
     )
}