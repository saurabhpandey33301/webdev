// import JoditEditor from 'jodit-react';
// import {  useRef, useState } from 'react';
// import { Navbar } from './Navbar';
// import axios from 'axios';
// import { BACKEND_URL } from '../../config';
// import { useNavigate } from 'react-router-dom';

// import { motion, AnimatePresence } from "framer-motion";

// export const  TextEditor =  ()=>{
   
//     const  [content , setContent] = useState<string>("");
//     const [title , setTitle] = useState<string>("");
//     const [img, setImg] = useState<File | null>(null);
//     const editor = useRef(null);
//     const navigate = useNavigate();

//     const [isOpen, setIsOpen] = useState(false);
//     const [visibility, setVisibility] = useState(true);

//     interface HandleChangeProps {
//         value: string;
//     }

//     const handleChange = ({ value }: HandleChangeProps) => {
//         setVisibility(value === "true");
//         setIsOpen(false); // Close dropdown after selection
//     };


//     return (
//         <div className='bg-white dark:bg-gray-700 w-full min-h-screen '>
            
//             <div  >
//                  <Navbar />
//             </div>
            
//             <div className='p-10' >
//                                 <div className='grid grid-cols-1 gap-6  ' >
//                                     <div className='text-black dark:text-white text-4xl'>
//                                            title :
//                                     </div>
//                                     <div>
//                                         <input type='text' placeholder='enter title here' 
//                                            onChange={(e)=>{
//                                                setTitle(e.target.value)
//                                            }}
//                                         className='p-3 rounded-lg border-2 border-black dark:border-white
//                                          w-2/3 ' ></input> 
//                                     </div>
//                                     <div className='text-black dark:text-white text-4xl'>
//                                            status :
//                                     </div>
//                                     <div className="relative inline-block text-left w-2/3 ms-0">
//                                                     {/* Button */}
//                                                     <button 
//                                                         onClick={() => setIsOpen(!isOpen)}
//                                                         className=" w-full border border-gray-300 dark:border-gray-600 rounded-md  px-4 py-2 text-gray-700 dark:text-white
//                                                         bg-white dark:bg-gray-800 shadow-md 
//                                                                 flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition "
//                                                     >
//                                                         {visibility ? "Public" : "Private"}
//                                                         <span className="ml-2">▼</span>
//                                                     </button>

//                                                     {/* Dropdown Menu */}
//                                                     <AnimatePresence>
//                                                         {isOpen && (
//                                                             <motion.div
//                                                                 initial={{ opacity: 0, scale: 0.9, y: -5 }}
//                                                                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                                                                 exit={{ opacity: 0, scale: 0.95, y: -5 }}
//                                                                 transition={{ duration: 0.2 }}
//                                                                 className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
//                                                                             rounded-md shadow-lg z-10 "
//                                                             >
//                                                                 <ul className="p-2">
//                                                                     <li 
//                                                                         onClick={() => handleChange({ value: "true" })}
//                                                                         className="px-4 py-2 text-gray-700 dark:text-white hover:bg-lime-400 dark:hover:bg-lime-400 hover:dark:text-black
//                                                                                 rounded-md cursor-pointer transition"
//                                                                     >
//                                                                         Public
//                                                                     </li>
//                                                                     <li 
//                                                                         onClick={() => handleChange({ value: "false" })}
//                                                                         className="px-4 py-2 text-gray-700 dark:text-white hover:bg-lime-400 dark:hover:bg-lime-400 hover:dark:text-black 
//                                                                                 rounded-md cursor-pointer transition"
//                                                                     >
//                                                                         Private
//                                                                     </li>
//                                                                 </ul>
//                                                             </motion.div>
//                                                         )}
//                                                     </AnimatePresence>

//                                                     {/* Display Selected Option */}
//                                                     <p className="mt-2 p-1 text-gray-600 dark:text-gray-300">Selected: {visibility ? "Public" : "Private"}</p>
//                                     </div>
                                   
//                                     <div className='text-black dark:text-white text-4xl'>
//                                           Upload Img :
//                                      </div>
//                                     <div>
//                                         <input type='file' placeholder='upload image' 
//                                            onChange={(e) => {
//                                             if (e.target.files && e.target.files.length > 0) {
//                                                 setImg(e.target.files[0]); // Store the File object
//                                             }
//                                              }} 
//                                         className='p-3 rounded-lg border-2 border-black dark:border-white
//                                         w-2/3 ' ></input> 
//                                     </div>
//                                     <div className='text-sm text-red-500'>
//                                         *upload size must be less then 100kb _(*_*)_
//                                     </div>
//                                      <div className='text-black dark:text-white text-4xl'>
//                                            description :
//                                      </div>


//                                      <div className='text-black w-3/3' ref={editor}>
//                                         <JoditEditor 
//                                                 ref={editor}
//                                                 // value={content} 
//                                                 //  config={edit}
//                                                 // tabIndex={100} // tabIndex of textarea
//                                                 // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
//                                                 onChange={(newContent) => {
//                                                     setContent(newContent); // Keeps only allowed HTML tags
//                                                 }}
//                                         /> 
//                                      </div>
//                                      <div>
//                                         <button 
//                                                onClick={async () => {
//                                                 try {
//                                                     const formData = new FormData();
//                                                         formData.append("title", title);
//                                                         formData.append("content", content);
//                                                         formData.append("status", visibility ? "public" : "private");
//                                                         if (img) formData.append("img", img);
//                                                     await axios.post(`${BACKEND_URL}/api/v1/blog/upload`, 
//                                                         formData, 
//                                                         {
//                                                             headers: {
//                                                                 Authorization: localStorage.getItem("token"),
//                                                                 "Content-Type": "multipart/form-data", 
//                                                             }
//                                                         }
//                                                     );
//                                                     alert("blog Created");
//                                                     navigate("/profile")
//                                                 } catch (error) {
//                                                     alert("Unable to publish the post");
//                                                     console.error(error);  // Log the actual error for debugging
//                                                 }
//                                             }}
                                            
//                                                 className='rounded-md text-xl  text-white
//                                                 hover:text-black 
//                                                 p-2 min-w-30
//                                                 bg-green-500 hover:bg-green-400 dark:bg-lime-400 b
//                                                 hover:dark:bg-lime-300 '  >Publish</button>
//                                      </div>
//                                 </div>
//             </div>
           
//         </div>

//     )
// }







import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

import axios from "axios";
import { BACKEND_URL } from "../../config";

import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TextEditor = () => {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [img, setImg] = useState<File | null>(null);
    const editor = useRef(null);
  

    const [isOpen, setIsOpen] = useState(false);
    const [visibility, setVisibility] = useState(true); // true for Public, false for Private

    const handleChange = (value: boolean) => {
        setVisibility(value);
        setIsOpen(false);
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("content", content);
            formData.append("status", visibility ? "public" : "private");
            if (img) formData.append("img", img);

            await axios.post(`${BACKEND_URL}/api/v1/blog/upload`, formData, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success("Blog Created Successfully!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide,
            });

            setTimeout(() => window.location.href = "/profile", 2000);
        } catch (error) {
            toast.error("Failed to publish the post!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide,
            });
            console.error(error);
        }
    };

    return (
        <>
               <ToastContainer position="bottom-right" autoClose={2000} />
            <div className="bg-white dark:bg-gray-700 w-full min-h-screen">
               

                <div className="p-10">
                    <div className="grid grid-cols-1 gap-6">
                        {/* Title Input */}
                        <div className="text-black dark:text-white text-4xl">Title:</div>
                        <input
                            type="text"
                            placeholder="Enter title here"
                            onChange={(e) => setTitle(e.target.value)}
                            className="p-3 rounded-lg border-2 border-black dark:border-white w-2/3"
                        />
                        {/* Image Upload */}
                        <div className="text-black dark:text-white text-4xl">Upload Img:</div>
                        <input
                            type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    setImg(e.target.files[0]);
                                }
                            }}
                            className="p-3 rounded-lg border-2 border-black dark:border-white w-2/3"
                        />
                        <div className="text-sm text-red-500">*Upload size must be less than 100KB</div>
                        {/* Status Dropdown */}
                        <div className="text-black dark:text-white text-4xl">Status:</div>
                        <div className="relative inline-block text-left w-2/3">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-gray-700 dark:text-white
                                        bg-white dark:bg-gray-800 shadow-md flex justify-between items-center
                                        hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            >
                                {visibility ? "Public" : "Private"}
                                <span className="ml-2">▼</span>
                            </button>
                             
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: -5 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -5 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                                                   rounded-md shadow-lg z-10"
                                    >
                                        <ul className="p-2">
                                            <li
                                                onClick={() => handleChange(true)}
                                                className="px-4 py-2 text-gray-700 dark:text-white hover:bg-lime-400 dark:hover:bg-lime-400 
                                                            hover:dark:text-black rounded-md cursor-pointer transition"
                                            >
                                                Public
                                            </li>
                                            <li
                                                onClick={() => handleChange(false)}
                                                className="px-4 py-2 text-gray-700 dark:text-white hover:bg-lime-400 dark:hover:bg-lime-400 
                                                            hover:dark:text-black rounded-md cursor-pointer transition"
                                            >
                                                Private
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <p className="mt-2 p-1 text-gray-600 dark:text-gray-300">
                                Selected: {visibility ? "Public" : "Private"}
                            </p>
                        </div>

                        

                        {/* Description Editor */}
                        <div className="text-black dark:text-white text-4xl">Description:</div>
                        <div className="text-black w-3/3" ref={editor}>
                            <JoditEditor
                                ref={editor}
                                onChange={(newContent) => setContent(newContent)}
                            />
                        </div>

                        {/* Publish Button */}
                        <button
                            onClick={handleSubmit}
                            className="rounded-md text-xl text-white hover:text-black p-2 w-25
                                       bg-green-500 hover:bg-green-400 dark:bg-lime-400 hover:dark:bg-lime-300"
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
                                  
        </>
    );
};
