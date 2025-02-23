// import { Navbar } from "../components/Navbar"
// import { useBlog } from "../hooks"
// import { useParams } from "react-router-dom"
// import { Loading } from "@/subComponents/Loading"
// import parse from "html-react-parser"

// export default function BlogOne  (){

//     const { id } = useParams<{ id: string }>();
//     if(!id){
//         return(
//             <div>
//                 error 404
//             </div>
//         )
//     }
//     return (

//         <div className=" bg-white dark:bg-gray-700 min-h-screen h-full w-full">
//             <Navbar />
//             <BlogOneCart id={id} />
//         </div>
//     )
// }



// const BlogOneCart = ({id}:{id:string })=>{

//       const {blog, loading} = useBlog({id: id});
//       console.log(blog);
      
//       if(loading){
//          return (
//             <Loading />
//          )
//       }else if(blog){
//           return (
//              <div>
//                  <div className="flex justify-center p-10 ">
//                 <div className="border-2 border-black dark:border-white rounded-xl flex justify-between min-w-300 min-h-150 hover:shadow-xl hover:shadow-neutral-50/50">
//                     <div className=" p-5  text-white ">
//                         <div className="flex m-2 " >
//                                 <div className="rounded-full bg-lime-500 border-2 border-none p-4 ps-6 pe-6 tranform translate-y-0.5 text-black  m-2 ">
//                                    S</div>
//                                 <div className="text-sm text-black dark:text-gray-200 tanform translate-y-9  translate-x-1">{"3/06/2002"}</div>
//                         </div>
//                         <div className="text-8xl text-gray-700 dark:text-white m-4  max-w-50 md:max-w-150 tranform -translate-y-3 break-words">
//                                   {blog.title}
//                         </div>
//                         <div className="text-md text-black dark:text-gray-200 m-6   max-w-50 md:max-w-150 transform -translate-y-3 break-words  ">
//                                 {parse(blog.content)}
//                         </div>
//                         <div>
//                             <div className="text-sm text-stone-600 dark:text-gray-300 m-5 transform translate-x-1" >1 minute(s) read</div>
//                         </div>
                    
//                     </div>
//                     <div className="flex flex-col">
//                        <div><img src={blog.img} alt="description" className=" w-50 h-20  md:w-120 md:h-80  tranform translate-y-0 rounded-xl overflow-hidden p-0.5"   /></div>
//                        <div className="text-5xl text-right m-4 text-black dark:text-white" >Author</div>
//                        <div className="text-md text-2xl text-lime-600 dark:text-lime-400 text-right m-2 tanform -translate-x-3 -translate-y-3" >-{blog.author.name}</div>
//                     </div>
    
//                 </div>
            
//             </div>
//              </div>
//           )

//       }
// }





import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Loading } from "@/subComponents/Loading";
import parse from "html-react-parser";
import {motion} from "framer-motion"


export default function BlogOne() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>Error 404</div>;
  }
  return (
    <div className="bg-white dark:bg-gray-700 min-h-screen w-full">
    
      <BlogOneCart id={id} />
    </div>
  );
}

const BlogOneCart = ({ id }: { id: string }) => {
  const { blog, loading } = useBlog({ id });
  
  if (loading) {
    return (
       <div>
        <Loading />
       </div>
    );
  } else if (blog) {
    return (
      <div className="flex flex-col items-center p-4 md:p-10">
        <div className="border-2 border-black dark:border-white rounded-xl flex flex-col md:flex-row min-w-full md:min-w-3/4 shadow-lg p-4 md:p-6">
          {/* Left Section */}
          <div className="flex flex-col p-4 w-full md:w-2/3">
            <div className="flex items-center mb-4">
              <motion.div className="rounded-full bg-lime-500 text-black p-3 ps-6 pe-6 text-2xl font-bold"   transition={{ duration: 0.1, ease: "easeOut" }}   whileHover={{ scale: 1.1 }}>{blog.author.name[0]}</motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-300 ml-3">{blog.createdAt.split('T')[0]}</div>
            </div>
            <h1 className="text-3xl md:text-6xl text-gray-700 dark:text-white font-bold break-words">{blog.title}</h1>
            <div className="text-md text-black dark:text-gray-200 mt-4 break-words">{parse(blog.content)}</div>
            <div className="text-sm text-stone-600 dark:text-gray-300 mt-4">1 minute(s) read</div>
          </div>
          {/* Right Section */}
          <motion.div className="flex flex-col items-center w-full md:w-1/3 p-4" >
            {blog.img && (
              <motion.img
              transition={{ duration: 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}

                src={blog.img}
                alt="Blog Cover"
                className="w-full md:w-4/5 rounded-xl"
              />
            )}
            <div className="text-xl md:text-3xl font-semibold text-black dark:text-white mt-4">Author</div>
            <div className="text-lg md:text-2xl text-lime-600 dark:text-lime-400 mt-2">-{blog.author.name}</div>
          </motion.div>
        </div>
      </div>
    );
  }
};
