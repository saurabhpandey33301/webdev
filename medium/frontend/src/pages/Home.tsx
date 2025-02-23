import { motion, } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCheck } from "@/hooks";



export default function Home(){


  const{check} = useCheck();

  
 
    return (
      <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-500 relative overflow-hidden">
    

      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        {/* Stable Floating Background (No Glitch) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-44 h-44 bg-blue-400 dark:bg-lime-500 opacity-30 rounded-full blur-3xl"
            animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-20 w-36 h-36 bg-blue-600 dark:bg-blue-500 opacity-30 rounded-full blur-3xl"
            animate={{ y: [0, 10, 0], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
        </div>

        {/* Clean Animated Card */}
        <motion.div
          className="relative z-10 bg-gray-200 dark:bg-gray-800 rounded-3xl p-10 shadow-xl text-center flex flex-col items-center max-w-3xl transition-all duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Title Animation */}
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <span className="text-blue-600 dark:text-lime-400">WordFlow</span>
          </motion.h1>

          {/* Subtitle Animation */}
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl text-center transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Share your thoughts, read amazing blogs, and connect with like-minded people.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            className="flex space-x-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 1, staggerChildren: 0.3 },
              },
            }}
          >
            {/* Get Started Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/signup">
                <Button className={`bg-blue-600 dark:bg-lime-600 hover:bg-blue-500 dark:hover:bg-lime-400 text-white px-6 py-3 rounded-xl text-lg transition-all duration-500 ${check ? "hidden" : ""} `}>
                  Get Started
                </Button>
              </Link>
            </motion.div>

            {/* Explore Blogs Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/blog">
                <Button className="bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 text-white px-6 py-3 rounded-xl text-lg transition-all duration-500">
                  Explore Blogs
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    
    )
}