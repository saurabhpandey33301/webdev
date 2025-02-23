import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { useRecoilState, useRecoilStateLoadable,  useRecoilValueLoadable } from "recoil";
import { blogAtomFamily, blogsAtomFamily,  checkAtom, checkSelector, idAtom, userAtom, userSelector } from "@/Atoms/Atom";





// export const useCheck = ()=>{

//     const[check ,setCheck] = useState(false);
//     const [id , setID] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await axios.post(`${BACKEND_URL}/api/v1/blog/check`,{},{
//                 headers : {
//                     Authorization : localStorage.getItem("token")
//                 }
//             });

//             setID(res.data.userId)
//             // console.log(res.data)
//             if(res.status === 200 && res.data !== ""){
//                 setCheck(true);
//             }
            
//         };
//         fetchData();
//     }, [id]);

//     return({check,id})
// } 


export const useCheck = () => {
    const [check, setCheck] = useRecoilState(checkAtom); // Recoil state for check status
    const [id, setId] = useRecoilState(idAtom); // Recoil state for user ID
    const checkLoadable = useRecoilValueLoadable(checkSelector); // Selector that fetches the check status and user ID
  
    // Use useEffect to ensure that the state is updated after the loadable resolves
    useEffect(() => {
      if (checkLoadable.state === "hasValue") {
        setCheck(checkLoadable.contents.check); // Set check status in atom
        setId(checkLoadable.contents.id); // Set userId in atom
      }
    }, [checkLoadable, setCheck, setId]); // Re-run effect when checkLoadable changes
  
    return { check, id, setCheck };
  };

interface BlogOnetype {
       title : string,
       content : string,
       id : string,
       img : string,
     
       author : {
           name : string
           
       } 
}



// export const useBlog =({id} : {id:string})=>{
//     const [loading,setLoading] = useState(true);
//     const[blog,setBlog] = useState<{
//         title : string,
//        content : string,
//        id : string,
//        img : string,
//        published : boolean,
//        createdAt : string,
//        author : {
//            name : string
//        } 
//     }>({
//         title: "",
//         content: "",
//         id: "",
//         img : "",
//         published : false,
//         createdAt : "",
//         author: {
//             name: ""
//         }
//     });

//     useEffect(()=>{
//         axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
//             headers : {
//                 Authorization : localStorage.getItem("token")
//             }
//         }).then(res => {
//             setBlog(res.data.blog);

//             setLoading(false)
//         })
    
//     },[])
    
//     return ({loading,blog})
// }



export const useBlog = ({ id }: { id: string }) => {
    const [blogLoadable, setBlog] = useRecoilStateLoadable(blogAtomFamily(id));
  
    return {
      loading: blogLoadable.state === "loading",
      blog: blogLoadable.contents,
      setBlog, // Allows updating the blog if needed
    };
  };


// export const useBlogs = () => {
//     const [loading, setLoading] = useState(true);
//     const [blogs, setBlogs] = useState<Blogtype[]>([]);
//     const [error, setError] = useState<string | null>(null);
  
//     useEffect(() => {
//       const fetchBlogs = async () => {
//         try {
//           const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
//             headers: {
//               Authorization: localStorage.getItem("token"),
//             },
//           });
//           setBlogs(res.data?.blogs || []);
//         } catch (err) {
//           setError("Failed to fetch blogs");
//           console.error(err);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchBlogs();
//     }, []);
  
//     return { loading, blogs, error ,setBlogs};
//   };

export const useBlogs = (filters = {}) => {
    const blogsLoadable = useRecoilValueLoadable(blogsAtomFamily(filters));
    const [blogs, setBlogs] = useRecoilState(blogsAtomFamily(filters));

    useEffect(() => {
        if (blogsLoadable.state === "hasValue") {
            setBlogs(blogsLoadable.contents);
        }
    }, [blogsLoadable,setBlogs]);

    return {
        loading: blogsLoadable.state === "loading",
        blogs: blogs,
        error: blogsLoadable.state === "hasError" ? "Failed to fetch blogs" : null,
        setBlogs,
    };
};


  
export const usefind = ({id} : {id:string})=>{
    const [loading,setLoading] = useState(true);
    const[blogs,setBlogs] = useState<BlogOnetype[]>([]);

   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post(`${BACKEND_URL}/api/v1/blog/find`,
                    { id }, // ✅ Send id correctly
                    {
                        headers: {
                            Authorization: localStorage.getItem("token"), // ✅ Ensure correct token format
                        }
                    }
                );
                
                setBlogs(res.data.blog);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]); // ✅ Add id as a dependency
    
    return {loading,blogs,setBlogs}
}

// interface userInputType {
//     name : string
// } 

// export const useUser =  ()=>{
//     const[loading,setLoading] = useState(true);
//     const[content,setContent] = useState<string>("");
    
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await axios.post(`${BACKEND_URL}/api/v1/user/info`,
//                     { }, // ✅ Send id correctly
//                     {
//                         headers: {
//                             Authorization: localStorage.getItem("token"), // ✅ Ensure correct token format
//                         }
//                     }
//                 );
                
//                 setContent(res.data);
//             } catch (error) {
//                 console.error("Error fetching blog:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []); // ✅ Add id as a dependency
    
//     return {loading,content}

// }




export const useUser = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const userLoadable = useRecoilValueLoadable(userSelector);

  useEffect(() => {
    if (userLoadable.state === "hasValue") {
      setUser(userLoadable.contents); // Updates the atom with the fetched data
    }
  }, [userLoadable.state]); // Dependency added

  return { loading: userLoadable.state === "loading", content: user };
};