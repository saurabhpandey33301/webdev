
import { Inputbox } from "../subComponents/Inputbox";
import { Loginbtn } from "../subComponents/Loginbtn";
import { Footer } from "../subComponents/Footer";
import {   useState } from "react";
import { SigninInput } from "blogzod-common";

import axios from "axios";
import { BACKEND_URL } from "../../config";
import { ToastContainer, toast, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.css"; // Ensure CSS is imported!
import { useSetRecoilState } from "recoil";
import { checkAtom } from "@/Atoms/Atom";

export const SignSec = () => { 

    // useEffect(() => {
    //     toast.info("lo");
    //   }, []);
    const setCheck = useSetRecoilState(checkAtom)
    const [postInputs, setPostInputs] = useState<SigninInput>({
        email: "",
        password: "",
    });

   

    const handleSignIn = async () => {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
            const token = res.data; // Ensure correct token extraction

            localStorage.setItem("token", token);
            setPostInputs({ email: "", password: "" });
         
           
            toast.success("Signed in successfully", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide,
            });
            setCheck(true);
            
            // Delay navigation so toast is visible
            setTimeout(() => {
               window.location.href = "/blog"
            }, 2000);
        } catch (error) {
            
            toast.error("Signin failed. Please check your credentials.", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide,
            });

            console.error("Signin error:", error);
        }
    };

    return (
        <div>
              <ToastContainer position="bottom-right" autoClose={2000} />
            <div className="flex flex-col pt-4 pb-2">
                <div className="flex items-center justify-center">
                    <div className="items-center">
                        <div className="transform -translate-y-6 text-3xl text-black dark:text-lime-400 text-center font-bold">
                            Sign In
                        </div>
                        <div className="transform -translate-y-4 mb-5 text-center text-black dark:text-white">
                            Enter your credentials here!
                        </div>
                        <div>
                            <Inputbox
                                inputVal={postInputs.email}
                                placeholder="spandey3301@gmail.com"
                                label="Email"
                                onChange={(e) =>
                                    setPostInputs({ ...postInputs, email: e.target.value })
                                }
                            />
                            <Inputbox
                                inputVal={postInputs.password}
                                type="password"
                                placeholder="••••••"
                                label="Password"
                                onChange={(e) =>
                                    setPostInputs({ ...postInputs, password: e.target.value })
                                }
                            />
                            <Loginbtn name="Sign In" onClick={handleSignIn} />
                        </div>
                        <Footer mssg="Don't have an account?" liinked="Register here" to="/signup" />
                    </div>
                </div>
            </div>
           
            {/* Toast notifications */}
          
           
        </div>
    );
};
