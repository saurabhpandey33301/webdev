import {  useEffect, useState } from "react"
import { Btn } from "../subComponents/btn";
import { ModeToggle } from "./mode-toggle";
import { useCheck, useUser } from "@/hooks";
import { motion } from "framer-motion";
import { useLocation} from "react-router-dom";
import img from "../assets/account.png"
import { Link, useNavigate } from "react-router-dom";



const tabs = [{"label": "Home", "path": "/home"}, {"label": "Blogs", "path": "/blog"},
   {"label": "About", "path": "/about"}, {"label": "Profile", "path": "/profile"} ,{"label": "Add", "path": "/publish"} ];
const tabs2 = [{"label": "Home", "path": "/home"}, {"label": "Blogs", "path": "/blog"}, 
  {"label": "About", "path": "/about"}, {"label": "Signin", "path": "/signin"} ,
  {"label": "Signup", "path": "/signup"} ];



export const Navbar = ()=>{
    
   const [toggle,setToggle] =useState(false);
   const {content} = useUser();
  
   const{check} = useCheck();

   
   


   
    //screen k bar khi bhi dabane pe dropdown menu ko gyb kr dega
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
          const target = event.target as HTMLElement; // Explicitly cast target to HTMLElement
          
          if (!target.closest(".toggle-btn") && !target.closest(".dropdown-menu")) {
            setToggle(false);
          }
        };
      
        document.addEventListener("click", handleClick);
      
        return () => {
          document.removeEventListener("click", handleClick);
        };
      }, []);
      
  
    return (
        <>
          <div className="w-full border-b-2 rounded-lg border-black dark:border-white bg-neutral-50
           dark:bg-slate-700 p-2 text-white grid grid-cols-3 dark:hover-shadow-md dark:hover-shadow-neutral-50/50 pb-2 ">
            <div className="grid grid-cols-2">
              <Link to={"/home"}>
              <div className="flex">
                {/* <div><img src="27982521-Photoroom.png" className="w-10 h-10 tranform translate-y-2"></img></div> */}
                <div><h1 className="text-3xl text-black dark:text-white font-extrabold transform translate-y-4 cursor-pointer ">
                  WordFloW
                </h1></div>

              </div>
              </Link>

            </div>
            <div className="ms-8">{check ? <ChipTabs tabs={tabs} /> : <ChipTabs tabs={tabs2} />}</div>

            <div className="flex justify-end">

            <div className="flex justify-around items-center gap-3">
              {check &&    <div className="text-black hidden sm:block dark:text-white text-2xl font-semibold">Hello {content.split(' ')[0]}</div>}
    
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents dropdown from closing immediately
                  setToggle(!toggle);
                }}
                className="rounded-full border-none p-2 cursor-pointer toggle-btn"
              >
                <img src={img} className="w-10 h-10" alt="User Profile" />
              </button>
    
              <ModeToggle />
            </div>
            </div>
          </div>
    
          {toggle && (
            <div className="z-30 absolute right-0 mt-2 dropdown-menu">
              <div className="flex flex-col rounded-lg items-center bg-gray-200 dark:bg-gray-500 min-w-35 p-2 cursor-pointer">
                <Btn to="/home" label={"Home"} />
                <Btn to="/blog" label={"Blogs"} />
                <Btn to="/about" label={"About"} />
                {check ? <Btn to="/profile" label={"Profile"} /> : <Btn to="/signup" label={"Signup"} />}
                <Btn  to={check ? "/signin" : "/signin"} label={check ? "Logout" : "Signin"} />
              </div>
            </div>
          )}
        </>
      );
    };

   

    // ChipTabs for authenticated users
    const ChipTabs = ({ tabs }: { tabs: Array<{ label: string; path: string }> }) => {
      const location = useLocation();
      return (
        <div className="  pt-2 flex-wrap gap-2 hidden xl:block">
          {tabs.map((tab) => (
            <Chip
              key={tab.label}
              text={tab.label}
              path={tab.path}
              selected={location.pathname === tab.path} // Check active tab based on URL
            />
          ))}
        </div>
      );
    };

    
    // Chip Component
    const Chip = ({
      text,
      path,
      selected,
    }: {
      text: string;
      path: string;
      selected: boolean;
    }) => {
      const navigate = useNavigate();
    
      return (
        <button
          onClick={() => navigate(path)}
          className={`${
            selected
              ? "text-white"
              : "text-black dark:text-slate-300 hover:text-black hover:dark:text-slate-200 hover:bg-gray-200 hover:dark:bg-slate-700"
          } text-lg transition-colors px-3 py-3 rounded-md relative cursor-pointer`}
        >
          <span className="relative z-10">{text}</span>
          {selected && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md m-1"
            ></motion.span>
          )}
        </button>
      );
    };
    



