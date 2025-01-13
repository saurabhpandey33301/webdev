import { useNavigate } from "react-router-dom"

export default function Landing(){
    const navigate  =  useNavigate();

    function Dabaona(){
        navigate('/dashboard')
    }
    return(
        <>
           <button onClick={Dabaona}>Go to dashboard</button>
        </>
    )
}