// import { Navbtn } from "./Navbtn"

// export const Appbar = ()=>{
//     return(
//         <div className="flex justify-between p-3 border-b-1 border-white rounded-xl  ">
//            <div className="text-4xl text-white  flex justify-between  ">
//                 <h1 className="text-lime-300 p-2 hover:-translate-y-1 transition  " >Welcome</h1> 
//                 <h1 className="text-white p-2 hover:-translate-y-1 transition  " >to</h1>
//                 <h1 className="text-lime-300 p-2 hover:-translate-y-1 transition  ">our</h1>
//                 <h1 className="text-white p-2 hover:-translate-y-1 transition  ">todo</h1>
//                 <h1 className="text-lime-300 p-2 hover:-translate-y-1 transition  ">App !</h1>
               
//            </div>
//            <div className="flex justify-evenly">
//                <Navbtn label={"Dashboard"} to={"/signin"} />
//                <Navbtn  label={"SignIn"} to={"/signin"} />
//                <Navbtn  label={"SignUp"} to={"/signup"} />
//            </div>
//         </div>
//     )
// }



import { Navbtn } from "./Navbtn";

export const Appbar = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between p-3 border-b-2  border-white rounded-xl">
            {/* Left Side: Welcome Text */}
            <div className="text-2xl sm:text-3xl lg:text-5xl text-white flex flex-wrap justify-between  sm:mb-0">
                <h1 className="text-lime-300 p-2 hover:-translate-y-1 transition">Welcome</h1>
                <h1 className="text-white p-2 hover:-translate-y-1 transition">to</h1>
                <h1 className="text-lime-300 p-2 hover:-translate-y-1 transition">our</h1>
                <h1 className="text-white p-2 hover:-translate-y-1 transition">todo</h1>
                <h1 className="text-lime-300 p-2 hover:-translate-y-1 transition">App !</h1>
            </div>

            {/* Right Side: Navigation Buttons */}
            <div className="flex justify-evenly ">
                <Navbtn label={"Dashboard"} to={"/signin"} />
                <Navbtn label={"SignIn"} to={"/signin"} />
                <Navbtn label={"SignUp"} to={"/signup"} />
            </div>
        </div>
    );
};
