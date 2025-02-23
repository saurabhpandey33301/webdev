import { Link } from "react-router-dom";

export const Footer = ({mssg,liinked , to})=>{
    return(
        <div className="mt-3 text-white">
                    
        {mssg} {" "}
        <Link to={to} className="underline text-lime-400 hover:text-lime-300 ">
            {liinked}
        </Link>
        
     </div>
    )
}