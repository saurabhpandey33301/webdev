
import { BlogCart } from "../subComponents/BlogCart"
import { Searchbar } from "../subComponents/Searchbar"
import { useBlogs } from "../hooks"

import { Loading } from "@/subComponents/Loading"
import { useState, ChangeEvent } from "react"
import { Navbar } from "./Navbar"
 // Adjust the import path as necessary
// import { start } from "repl"
// import {ThreeDot} from "react-loading-indicators"



interface Blog {
     id : string,
     title : string,
     content : string,
     published : boolean,
     createdAt : string,
     img : string
     author : {
        name : string
     }
}
        

export const BlogCarts = () => {
        const { loading, blogs, error } = useBlogs({ published: true });
        const [searchInput, setSearchInput] = useState<string>("");

        if (loading) {
          return (
               <div>
                   <Loading />
               </div>
          );
        } 
        
        else if(error){
            return(
               <div>
                  <Navbar/>
                  <div>
                     {error}
                  </div>
               </div>
            )
        }
        
        
          return (
            <>
              <Searchbar
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setSearchInput(e.target.value);
                }}
              />
              {blogs
                .filter(
                  (blog: Blog) =>
                    blog.title.toLowerCase().includes(searchInput.toLowerCase()) &&
                    blog.published === true
                )
                .sort(
                  (a: Blog, b: Blog) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                ) // Sort by createdAt (newest first)
                .map((blog: Blog) => (
                  <BlogCart
                    key={blog.id}
                    title={blog.title}
                    content={blog.content}
                    publishDate={blog.createdAt.split("T")[0]}
                    publisherName={blog.author.name}
                    id={blog.id}
                    img={blog.img}
                  />
                ))}
            </>
          );
        
};

      
    
    
