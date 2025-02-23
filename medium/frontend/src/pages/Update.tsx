
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useEffect, useRef, useState } from "react";
import JoditEditor from 'jodit-react';
import { useBlog } from "@/hooks";
import { useSearchParams } from "react-router-dom";
import { Loading } from "@/subComponents/Loading";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Update() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [img, setImg] = useState<File | null>(null);

    const editor = useRef(null);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || "";

    const [isOpen, setIsOpen] = useState(false);
    const [visibility, setVisibility] = useState(true);

    interface HandleChangeProps {
        value: string;
    }

    const handleChange = ({ value }: HandleChangeProps) => {
        setVisibility(value === "true");
        setIsOpen(false);
    };

    const { loading, blog } = useBlog({ id : id });

    useEffect(() => {
        if (blog) {
            setTitle(blog.title || "");
            setContent(blog.content || "");
            setVisibility(blog.published);
        }
    }, [blog]);

    if (loading) {
        return (
            <div className='bg-white dark:bg-gray-700 w-full min-h-screen'>
                <Loading />
            </div>
        );
    }

    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("content", content);
            formData.append("id", id);
            formData.append("status", visibility ? "public" : "private");
            if (img) formData.append("img", img);

            await axios.put(`${BACKEND_URL}/api/v1/blog`, formData, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success("Updated Successfully!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide,
            });

            setTimeout(() => {
                window.location.href = "/profile";
            }, 1000);
            

        } catch (error) {
            toast.error("Unable to update the post", {
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
        <div className='bg-white dark:bg-gray-700 w-full min-h-screen'>
            <ToastContainer position="bottom-right" autoClose={2000} />
          
            <div className='p-10'>
                <div className='grid grid-cols-1 gap-6'>
                    <label className='text-black dark:text-white text-4xl'>Update Title:</label>
                    <input
                        type='text'
                        placeholder='Enter title here'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='p-4 rounded-lg border-2 border-black dark:border-white w-2/3'
                    />

                    <label className='text-black dark:text-white text-4xl'>Update Image:</label>
                    <input
                        type='file'
                        onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setImg(e.target.files[0]);
                            }
                        }}
                        className='p-4 rounded-lg border-2 border-black dark:border-white w-2/3'
                    />
                    <div className="text-sm text-red-500">*Upload size must be less than 100KB</div>
                    <label className='text-black dark:text-white text-4xl'>Status:</label>
                    <div className="relative inline-block text-left w-2/3">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-gray-700 dark:text-white bg-white dark:bg-gray-800 shadow-md flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            {visibility ? "Public" : "Private"} <span className="ml-2">▼</span>
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: -5 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10"
                                >
                                    <ul className="p-2">
                                        <li onClick={() => handleChange({ value: "true" })} className="px-4 py-2 cursor-pointer hover:bg-lime-400 rounded-md">Public</li>
                                        <li onClick={() => handleChange({ value: "false" })} className="px-4 py-2 cursor-pointer hover:bg-lime-400 rounded-md">Private</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <label className='text-black dark:text-white text-4xl'>Update Description:</label>
                    <JoditEditor ref={editor} value={content} onChange={(newContent) => setContent(newContent)} />

                    <button
                        onClick={handleUpdate}
                        className='rounded-md text-xl text-white hover:text-black p-2 w-25 bg-green-500 hover:bg-green-400 dark:bg-lime-400 hover:dark:bg-lime-300'
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
