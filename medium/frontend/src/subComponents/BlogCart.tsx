import { motion } from "framer-motion";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

interface BlogCartInputType {
    publisherName: string;
    publishDate: string;
    title: string;
    content: string;
    id: string;
    img: string;
    
}

export const BlogCart = ({ publisherName, publishDate, title, content, id, img  }: BlogCartInputType) => {
    return (
        <motion.div 
           
            className="flex justify-center p-4"
        >
            <motion.div
            
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
            
            className="border-b-2 border-black dark:border-white rounded-md flex flex-col md:flex-row items-center md:items-start 
                            max-w-[95%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[65%] w-full  p-4 gap-4 
                            bg-white dark:bg-slate-600 transition-all duration-300 shadow-lg shadow-neutral-50/50 ">
                
                {/* Left Side - Content */}
                <div className="flex flex-col flex-1 w-full">
                    <div className="flex items-center gap-2">
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="rounded-full bg-lime-400 text-black font-bold w-10 h-10 flex items-center justify-center cursor-pointer"
                        >
                            {publisherName[0].toUpperCase()}
                        </motion.div>
                        <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                            <span className="font-semibold">{publisherName}</span>
                            <span className="mx-1">·</span>
                            <span className="text-gray-400">{publishDate}</span>
                        </div>
                    </div>
                    <div className="mt-2 text-2xl md:text-3xl font-bold text-black dark:text-white">
                        <Link to={`/blog/${id}`} className="hover:underline decoration-lime-400 p-1 truncate block max-w-full">
                            {title}
                        </Link>
                    </div>
                    <div className="mt-2 p-1 text-sm text-gray-700 dark:text-gray-300 line-clamp-2 md:line-clamp-3 lg:line-clamp-4 overflow-hidden">
                        {parse(content)}
                    </div>
                    <div className="mt-2 p-1 text-xs text-gray-400">1 minute(s) read</div>
                    <motion.div 
                       
                        className="mt-2"
                    >
                        <Link to={`/blog/${id}`}>
                            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-md px-4 py-2 transition-all duration-300 cursor-pointer">
                                Read more..
                            </button>
                        </Link>
                    </motion.div>
                </div>
                
                {/* Right Side - Image */}
                {img && (
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="w-full md:w-48 lg:w-60 flex-shrink-0"
                    >
                        <img src={img} alt="description" className="w-full h-auto rounded-lg object-cover" />
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};






