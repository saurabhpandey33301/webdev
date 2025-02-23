export const Inputbox = ({label,placeholder,onChange})=>{
    return (
        <div className="mt-2 text-white">
        <label >
            {label}:
            <br />
            <input onChange={onChange} type="text" placeholder ={placeholder}  className="border p-2 mt-2 pe-20 rounded-md text-white" />
        </label> <br />
        </div >
    )
}