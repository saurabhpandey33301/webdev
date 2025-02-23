import { Link} from "react-router-dom";

export const Footer = ({mssg,liinked , to} : {mssg : string , liinked : string , to : string})=>{
    return(
        <div className="mt-3 text-black dark:text-white">
                    
        {mssg} {" "}
        <Link to={to} className="underline text-blue-800 dark:text-lime-400  hover:text-blue-700 hover:dark:text-lime-300 ">
            {liinked}
        </Link>
        
     </div>
    )
}