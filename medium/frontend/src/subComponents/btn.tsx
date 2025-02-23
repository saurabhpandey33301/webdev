
import { checkAtom } from "@/Atoms/Atom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useSetRecoilState } from "recoil";

interface BtnType {
    label: string;
    to?: string;
}

export const Btn = ({ to, label }: BtnType) => {
    const navigate = useNavigate();
   const setCheck = useSetRecoilState(checkAtom)
    const handleClick = () => {
        if (label === "Logout") {
            localStorage.removeItem("token");
            setCheck(false)
            toast.info('logged out successfully', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
                });
               
            // Delay navigation slightly to allow toast to be seen
            setTimeout(() => {
                if (to) navigate(to)
            }, 1000);
        } else if (to) {
            console.log("|agyua bsdk")
            navigate(to)
        }
    };

    return (
        <div>
            <button 
                onClick={handleClick} 
                className="min-w-30 p-1 overflow-hidden text-black dark:text-white hover:dark:bg-white hover:text-black hover:dark:text-black rounded-md cursor-pointer text-lg"
            >
                {label}
            </button>
            <ToastContainer
                    position="bottom-right"
                    autoClose={1000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition={Slide}
            />
        </div>
    );
};
