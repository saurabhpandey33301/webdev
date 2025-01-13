import { useNavigate } from "react-router-dom"

export default function Dashboard(){
    const navigate = useNavigate();

    function DabaoNa(){
        navigate('/');
    }
	return(
        <>
          <button onClick={DabaoNa}>Go to Landing page</button>
        </>
    )
}