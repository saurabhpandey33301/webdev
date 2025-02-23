
import { Quote } from "../components/Quote";
import { SignupSec } from "../components/SignupSec";

 const Signup = () => {
    return (
        
        <>
            
            <div className=" bg-white dark:bg-gray-700  flex items-center justify-center min-h-screen backdrop-blur-4xl w-full">
                <div className=" m-8 grid grid-cols-1 md:grid-cols-2 bg-white 
                 dark:bg-slate-700 backdrop-blur-xl  p-2 border-2 border-black dark:border-white rounded-xl 
                hover:shadow-xl hover:shadow-neutral-50/50 w-full md:w-[800px]
                 max-w-full transform -translate-y-10  ">
                    {/* Left Section - Quote */}
                    <div className=" col-span-1  hidden md:block   md:border-r-2 border-black dark:border-white overflow-hidden  items-center justify-center text-center">
                        <Quote />
                    </div>
                    {/* Right Section - Signup */}
                    <div className=" col-span-1 p-5 overflow-hidden flex items-center justify-center">
                        <SignupSec />
                    </div>
                </div>
            </div>
    
        </>

    );
};

export default Signup;