


import { Link, useNavigate } from "react-router-dom";
import { useBlogs, useCheck } from "@/hooks";
import { Loading } from "@/subComponents/Loading";
import { useState } from "react";
import parse from "html-react-parser";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import edit from "../assets/edit.svg";
import del from "../assets/del.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { toast, Slide } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface Blog {
    id: string;
    title: string;
    content: string;
    img: string;
    published: boolean;
    createdAt: string;
    author: {
        name: string;
        id: string;
    };
}



export default function Profile() {
    const [searchInput, setSearchInput] = useState("");
    const { id } = useCheck();
    const { loading, blogs, setBlogs } = useBlogs({published : {} });

    if (loading) {
        return (
            <div className="bg-white dark:bg-gray-700 w-full min-h-screen flex flex-col items-center">
                <Loading />
            </div>
        );
    }

    return (
         
        <div className="bg-white dark:bg-gray-700 w-full min-h-screen ">
             <ToastContainer position="bottom-right" autoClose={2000} />
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 p-4 ">
                <div className="md:col-span-3 hidden md:flex flex-col border-r border-black dark:border-white p-4 min-h-screen">
                    <h2 className="text-3xl xl:text-5xl mb-4">Your Profile</h2>
                    <Link to="/publish">
                        <button className="rounded-xl border-2 text-xl text-white hover:text-black p-2
                         bg-green-400 hover:bg-green-500 dark:bg-lime-400 hover:dark:bg-lime-300 w-full cursor-pointer">
                            Add
                        </button>
                    </Link>
                </div>
                <div className="md:col-span-9 flex flex-col gap-6">
                    <div className="flex flex-wrap gap-4 items-center">
                        <input
                            onChange={(e) => setSearchInput(e.target.value)}
                            type="text"
                            placeholder="Search here"
                            className="p-3 w-full md:w-1/2 bg-gray-200 dark:bg-white border border-gray-300 focus:border-lime-400 rounded-full text-stone-600 dark:text-black outline-none"
                        />
                        <Link to="/publish" className="md:hidden w-full">
                            <button className="rounded-xl p-3 text-xl text-white hover:text-black w-full bg-green-400 hover:bg-green-500 dark:bg-lime-400 hover:dark:bg-lime-300">
                                Add
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-6">
                        {blogs
                          .filter((blog: Blog) => blog.title.toLowerCase().includes(searchInput.toLowerCase()) && blog.author.id === id)
                          .sort((a: Blog, b: Blog) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Sort by createdAt (newest first)
                          .map((blog: Blog) => (
                            <ProBlogCart key={blog.id} {...blog} setBlogs={setBlogs} />
                          ))}    </div>
                </div>
            </div>
        </div>
    );
}

export const ProBlogCart = ({ title, content, id, img, author,createdAt,published, setBlogs }: { title: string, content: string, id: string, img: string, author: { name: string, id: string },createdAt:string, published : boolean, setBlogs: React.Dispatch<React.SetStateAction<Blog[]>> }) => {
    const showContent = parse(content);
    const navigate = useNavigate();

  

    return (
        <div className="border-b-2 border-black dark:border-white  rounded-lg p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-9 flex flex-col ">
                <div className="flex items-center gap-3">
                    <div className="rounded-full text-sm p-3 bg-lime-400 text-black ps-4 pe-4">{author.name[0].toUpperCase()}</div>
                    <div className=" gap-1">
                    <span className="text-black dark:text-white ">{author.name}</span>
                    <span className="text-black dark:text-white ms-1 me-1">.</span>
                    <span className="text-black dark:text-gray-300 text-[12px] mt-1  ">{createdAt.split('T')[0]}</span>
                    </div>
                    <div className="rounded-md bg-gray-300 dark:bg-slate-800 p-1   w-16 flex justify-center">
                        {published ? "Public" : "Private"}
                    </div>
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold text-black dark:text-white cursor-pointer">
                    <Link to={`/blog/${id}`} className="hover:underline decoration-lime-400  truncate block p-1">
                        {title}
                    </Link>
                </h3>
                <div className="text-sm text-stone-600 dark:text-gray-200 truncate max-w-full p-1">{showContent}</div>

            </div >
            <div className="p-2 m-2">
            {img && <img src={img} alt="description" className="w-full md:w-4/3 rounded-full" />}
            </div>
            <div className="flex gap-2">
                <button onClick={() => navigate(`/update?id=${id}`)} className="bg-lime-500 p-2 rounded-md hover:bg-lime-300">
                    <img className="w-6" src={edit} alt="edit" />
                </button>
                <ExampleWrapper id={id} setBlogs={setBlogs}   />
                
                 
                {/* <button onClick={handleDelete} className="bg-red-500 p-2 rounded-md hover:bg-red-300">
                    <img className="w-6" src={del} alt="delete" />
                </button> */}
            </div>
        </div>
    );
};








const ExampleWrapper = ({id ,setBlogs}: {id :string ,setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="grid place-content-center">
        <button
          onClick={() => setIsOpen(true)}
          className="font-medium p-2 rounded hover:opacity-90 transition-opacity bg-red-500"
        >
          <img className="w-6" src={del} alt="delete" />
        </button>
        <SpringModal id={id} setBlogs={setBlogs}   isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    );
  };
  
  
  
  
  const SpringModal = ({
    isOpen,
    setIsOpen,
    id,
    setBlogs,
  }: {
    isOpen: boolean;
    id : string,
    setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }) => {
  
     
  
     
    const handleDelete = async () => {
      if (!id) {
        toast.error("Invalid blog id", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
          })
          return;
      }
  
      try {
          await axios.delete(`${BACKEND_URL}/api/v1/blog/delete`, {
              data: { id },
              headers: { Authorization: localStorage.getItem("token") },
          });
  
          toast.success('Blog deleted successfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
  
          // Update state after deletion
          setBlogs((prevBlogs: Blog[]) => prevBlogs.filter((blog: Blog) => blog.id !== id));
      } catch (error) {
          console.error("Delete error:", error);
          const errorMessage = axios.isAxiosError(error) ? error.response?.data?.message || "Error while deleting" : "Unexpected error occurred";
          toast.error(errorMessage, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            })
      }
  };
          return (

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                  >
                    <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                    <div className="relative z-10">
                      <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                        <FiAlertCircle />
                      </div>
                      <h3 className="text-3xl font-bold text-center mb-2">
                        One more thing!
                      </h3>
                      <p className="text-center mb-6">
                         Are u sure want to delete your blog ?
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                        >
                          Nah, go back
                        </button>
                        <button
                          onClick={() => { handleDelete(); setIsOpen(false);  }} 
                         
                          className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                        >
                          Just delete it already
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          );
  
         
  
  };
  