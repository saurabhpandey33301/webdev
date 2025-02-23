
import { Inputbox } from "../subComponents/Inputbox";
import { Loginbtn } from "../subComponents/Loginbtn";
import { Footer } from "../subComponents/Footer";
import { SignupInput } from "blogzod-common";
import { useState } from "react";
import { BACKEND_URL } from "../../config.ts";
import axios from "axios";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSetRecoilState } from "recoil";
import { checkAtom } from "@/Atoms/Atom.tsx";

export const SignupSec = () => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    });
    const setCheck = useSetRecoilState(checkAtom)
  

    const handleSignup = async () => {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
            const token = res.data;
            localStorage.setItem("token", token);
            setCheck(true)
            toast.success("Signup successful!", {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide,
            });
             
            setPostInputs({
                name: "",
                email: "",
                password: "",
            });

            setTimeout(() => {
                window.location.href = "/blog"
             }, 2000);
        } catch (error) {
            toast.error("Signup failed! Please try again.", {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide,
            });
            console.log(error);
        }
    };

    return (
        <>
            <ToastContainer position="bottom-right" autoClose={2000} />
            <div className="flex flex-col">
                <div className="flex items-center justify-center">
                    <div className="items-center">
                        <div className="text-3xl decoration-8 text-center font-bold text-black dark:text-lime-400">
                            SignUp
                        </div>
                        <div className="transform translate-y-2 text-center text-black dark:text-white">
                            Register here!
                        </div>
                        <div >
                            <Inputbox
                                inputVal={postInputs.name}
                                onChange={(e) => setPostInputs({ ...postInputs, name: e.target.value })}
                                placeholder={"Your Name"}
                                label={"Name"}
                            />
                            <Inputbox
                                inputVal={postInputs.email}
                                onChange={(e) => setPostInputs({ ...postInputs, email: e.target.value })}
                                placeholder={"your-email@example.com"}
                                label={"Email"}
                            />
                            <Inputbox
                                inputVal={postInputs.password}
                                type="password"
                                onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })}
                                placeholder={"******"}
                                label={"Password"}
                            />
                            <Loginbtn onClick={handleSignup} name={"SignUp"} />
                        </div>
                        <Footer mssg={"Already have an account?"} liinked={"Login here"} to={"/signin"} />
                    </div>
                </div>
            </div>
        </>
    );
};
