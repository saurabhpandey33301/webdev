import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from 'blogzod-common';
import { Hono } from "hono";
import { use } from 'hono/jsx';
import { decode, sign, verify } from 'hono/jwt'
import {string, z} from "zod"

import { v2 as cloudinary } from "cloudinary";
// import { serve } from "@hono/node-server";
import {encodeBase64} from "hono/utils/encode";

export const blogRoutes = new Hono<{
    Bindings : {
      DATABASE_URL : string,
      JWT_SECRET : string,
      CLOUDINARY_URL : string
    },
    Variables : {
        userId : string
    }
}>()




//Pagination ................... to show only 10 random output

blogRoutes.get('/bulk', async(c) => {
        const prisma = new PrismaClient({
                datasourceUrl: c.env.DATABASE_URL,
            }).$extends(withAccelerate())
            
            
            const blogs = await prisma.post.findMany({
                select : {
                    title : true,
                    content : true ,
                    id : true,
                    img : true,
                    published : true ,
                    createdAt : true,
                    author : {
                        select: {
                            name : true,
                            id : true
                        }
                    }
                }
            })
            
            return c.json({blogs});    
})

blogRoutes.get("/:id" , async(c)=>{
        const prisma = new PrismaClient({
                datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const id : string =  c.req.param("id")
        try {
            const blog = await prisma.post.findFirst({
                where : {
                    id : id  
                },
                select : {
                    id : true,
                    title : true,
                    content : true,
                    img:true,
                    published : true,
                    createdAt: true,
                    author : {
                        select : {
                            name : true,
                            
                        }
                    }
                }
            })
            return c.json({blog});
            
        } catch (error) {
            c.status(411);
            return c.json({
                msg : "Error while fetching the blog"
            })
        }
})
        
blogRoutes.use( "/*" , async (c, next) => {
    const authHeader = c.req.header("authorization") || "" ;  
try {
    const user = await verify(authHeader , c.env.JWT_SECRET) as { id: string };
    if(user){
        c.set("userId", user.id );
        await next();  
    }else{
        c.status(411);
        return c.text("you are not logged in");
    }
} catch (error) {
    c.status(403);
    return c.text("you are not logged in")
}
})

// blogRoutes.post('/' , (c) => c.req.parseBody().then(async (body) => {

//         const prisma = new PrismaClient({
//                 datasourceUrl: c.env.DATABASE_URL,
//         }).$extends(withAccelerate())
        
//         // const body = await c.req.json();
//         // const { success } = createBlogInput.safeParse(body)
//         // if(!success){
//         // c.status(411);
//         // return c.json({
//         //     message : "Incorrect input"
//         // })
//         // }
//         // const contentType = c.req.header("content-type");

//         // if (!contentType?.includes("multipart/form-data")) {
//         //     return c.json({ error: "Invalid Content-Type" }, 400);
//         // }

//         // const formData = await c.req.parseBody();

//         // if (!formData.image) {
//         //     return c.json({ error: "No image provided" }, 400);
//         // }

//         // if (!(formData.image instanceof File)) {
//         //     return c.json({ error: "Invalid image file" }, 400);
//         // }
//         // const imageBuffer = Buffer.from(await formData.image.arrayBuffer());
//         // const base64Image = `data:image/png;base64,${imageBuffer.toString("base64")}`;

//         const image = body["image"] as File;
//         const byteArrayBuffer = await image.arrayBuffer();
//         const base64 = encodeBase64(byteArrayBuffer);
//         const result = await cloudinary.uploader.upload(`data:image/png;base64,${base64}`);
//         console.log(result);
        

//         try {
//             // const result = await cloudinary.uploader.upload(base64Image);
//             const authorId = c.get("userId")
//             const blog = await prisma.post.create({
//                     data : {
//                         title : body.title as string,
//                         content : body.content as string,
//                         img : result.secure_url,
//                         authorId : authorId  
//                     }
//             })
//             return c.json({
//                 id : blog.id,
//                 url : result.secure_url
//             })
           
//         } catch (error) {
//             return c.json({ error: "Upload failed", details: (error as Error).message }, 500);
//         }

        
// }))

// blogRoutes.post("/upload", async (c) => {
//     const body = await c.req.parseBody();
//     const image = body["image"] as File;
  
//     if (!image) return c.json({ error: "No image uploaded" }, 400);
  
//     // Convert to Buffer
//     const arrayBuffer = await image.arrayBuffer();
//     const base64 = Buffer.from(arrayBuffer).toString("base64");
  
//     try {
//       // ✅ Correct way to upload to Cloudinary
//       const result = await cloudinary.uploader.upload(`data:image/png;base64,${base64}`);
  
//       return c.json({ url: result.secure_url });
//     } catch (error) {
//       return c.json({ error: "Cloudinary upload failed", details: (error as Error).message }, 500);
//     }
//   });



blogRoutes.post('/upload', async(c)=> {
    const file = await c.req.parseBody();
    const {success} = createBlogInput.safeParse(file);
    if(!success){
        c.status(403)
        return c.json({msg : "invalid input"})
    }
    const image = file["img"] as File;
    
    if (!image) return c.json({ error: "No image uploaded" }, 400);

    // Convert to base64
    const arrayBuffer = await image.arrayBuffer();
    const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "saurabh"); // Set in Cloudinary dashboard
    formData.append("cloud_name", "dchps5hqk"); // Your Cloudinary cloud name

    try {
        const response = await fetch(c.env.CLOUDINARY_URL, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Cloudinary upload failed: ${response.statusText}`);
        }

        const data = await response.json() as { secure_url: string };
        console.log("Uploaded Image URL:", data.secure_url);
        // return c.json({ url: data.secure_url }); // Return the image URL
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        let status = false;
        if(file.status === "public"){
              status = true;
        }else{
            status = false;
        }
        console.log(status)
        const blog = await prisma.post.create({
            data: {
                title: file.title as string,
                content: file.content as string,
                img: data.secure_url as string,
                published : status ,
                authorId: c.get("userId")
            }
        });
    
        return c.json({ id : blog.id ,url : data.secure_url});
    } catch (error) {
        console.error("Error uploading image:", error);
        return c.json({ error: "Upload failed" }, 500);
    }
   
});


    
blogRoutes.post("/check", async (c) => {
    const userId = c.get("userId");
    
    console.log("Retrieved userId:", userId);  // Debugging log

    if (!userId) {
        c.status(401);
        return c.json({
            error: "User not authenticated",
        });
    }

    c.status(200);
    return c.json({
        userId: userId,
        status: "done",
    });
});

     

blogRoutes.put('/', async(c)=> {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const file = await c.req.parseBody();
    if (!file["img"]) {
        delete file["img"];
    }
    const {success} = updateBlogInput.safeParse(file);
    if(!success){
        c.status(403)
        return c.json({msg : "invalid input"})
    }
    const image = file["img"] as File;

    let status = false;
    if(file.status === "public"){
          status = true;
    }else{
        status = false;
    }
    if (!image){
        try {
            
            const blog = await prisma.post.update({
                where : {
                    id : file.id as string
                },
                data: {
                    title: file.title as string,
                    content: file.content as string,
                    published : status,
                    authorId: c.get("userId")
                }
            });
        
            return c.json({ id : blog.id });
        } catch (error) {
            c.status(403)
            return c.json({error})
        }
        
    }else{

        // Convert to base64
        const arrayBuffer = await image.arrayBuffer();
        const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
    
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "saurabh"); // Set in Cloudinary dashboard
        formData.append("cloud_name", "dchps5hqk"); // Your Cloudinary cloud name
    
        try {
            const response = await fetch(c.env.CLOUDINARY_URL, {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error(`Cloudinary upload failed: ${response.statusText}`);
            }
    
            const data = await response.json() as { secure_url: string };
            console.log("Uploaded Image URL:", data.secure_url);
            // return c.json({ url: data.secure_url }); // Return the image URL
          
            const blog = await prisma.post.update({
                where : {
                    id : file.id as string
                },
                data: {
                    title: file.title as string,
                    content: file.content as string,
                    img: data.secure_url as string,
                    published : status,
                    authorId: c.get("userId")
                }
            });
        
            return c.json({ id : blog.id ,url : data.secure_url});
        } catch (error) {
            console.error("Error uploading image:", error);
            return c.json({ error: "Upload failed" }, 500);
        }
    }

   
});
 
const deleteInput = z.object({
    id : z.string().min(1)
})

blogRoutes.delete("/delete",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const body  = await c.req.json();
      const {success} = await deleteInput.safeParse(body)

      if(!success){
          c.status(403)
          return c.text("invalid input")
      }
    try {
        const res  = await prisma.post.delete({
            where : {
                id : body.id
            }
       })
 
       if(!res){
         c.status(403)
         return c.text("user not found")
       }
 
       c.status(200)
       return c.text("deleted")
    } catch (error) {
        c.status(411)
        return c.json({error})
    }
})


const findInut = z.object({
     id : string()
})

blogRoutes.post("/find" , async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const body  = await c.req.json();
      const {success} = await findInut.safeParse(body)

      if(!success){
          c.status(403)
          return c.text("invalid input")
      }
      try {
        const blog  = await prisma.post.findMany({
            where : {
                author : {
                    id : body.id
                }
            },select : {
                 title : true,
                 content : true,
                 id : true,
                 author : {
                     select : {
                         name : true
                     }
                 }
            }
       })
       c.status(200)
       return c.json({blog})
      } catch (error) {
         c.status(411)
         return c.text("tmc")
      }
})



// const port = 3000;
// serve({
//   fetch: blogRoutes.fetch,
//   port,
// });

// console.log(`Server running on http://localhost:${port}`);