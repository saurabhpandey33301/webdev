

import { motion } from "framer-motion";


export default function  About  (){
    return (
        <div className="dark:bg-gray-700 bg-white w-full min-h-screen " >
            
            
            <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-500 relative flex flex-col items-center justify-center px-4">
      
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 3 + 1; // Random size between 1px and 4px
          return (
            <motion.div
              key={i}
              className="absolute bg-white dark:bg-lime-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: Math.random() * 0.6 + 0.4, // Random initial opacity
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 1.5 + 0.8, // Faster flickering
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2, // Random delay for spontaneity
              }}
            />
          );
        })}
      </div>

      {/* About Section Content */}
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
          About <span className="text-blue-600 dark:text-lime-400">WordFlow</span>
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl text-center transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          WordFlow is a platform where creativity flows seamlessly. Share your thoughts, explore inspiring blogs, and connect with writers worldwide.
        </motion.p>
      </motion.div>
    </div>

        </div>

    )
}



