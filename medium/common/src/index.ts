import {z} from "zod"

export const signupInput  = z.object({
    email: z.string().email({ message: "invalid email" }),
    password : z.string().min(6, {message : "too short"}),
    name : z.string().optional()
})
export const signinInput  = z.object({
    email: z.string().email({ message: "invalid email" }),
    password : z.string().min(6, {message : "too short"}),
    
})
export const createBlogInput  = z.object({
    title : z.string().min(1,{message : "title can not be empty"}),
    content : z.string(),
    status : z.string().min(1),
    img: z
        .instanceof(File)
        .refine((file) => file.size > 0, "Image file is required") // Ensures file is not empty
        .refine((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type), "Only JPG, PNG, and WEBP are allowed"), // Restrict file type
   
})
export const updateBlogInput  = z.object({
    title : z.string().min(1,{message : "title can not be empty"}),
    content : z.string(),
    id : z.string().uuid({message : "invalid id"}),
    status : z.string().min(1),
    img: z
        .instanceof(File)
        .refine((file) => file.size > 0, "Image file is required") // Ensures file is not empty
        .refine((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type), "Only JPG, PNG, and WEBP are allowed") // Restrict file type
        .optional(),

    })



export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput  = z.infer<typeof updateBlogInput>


