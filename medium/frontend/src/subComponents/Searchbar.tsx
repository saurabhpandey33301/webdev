


import { ChangeEvent } from "react";
import { motion } from "framer-motion";

interface SearchbarInputType {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export const Searchbar = ({ onChange }: SearchbarInputType) => {
    return (
        <div className="flex justify-center items-center w-full p-5">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%]"
            >
                <input 
                    onChange={onChange} 
                    type="text" 
                    placeholder="Search blogs here .." 
                    className="p-3 bg-gray-200 dark:bg-white border-2 border-white focus:border-lime-400 
                               rounded-full w-full text-stone-600 dark:text-black outline-none shadow-md"
                />
            </motion.div>
        </div>
    );
};
