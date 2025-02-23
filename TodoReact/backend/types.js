const { z } = require("zod");

const createSchema = z.object({
    title: z.string().min(1,{message : "Title should not be empty"}),
    description: z.string().min(1,{message : "Description should not be empty"}),
  
})

const updateSchema = z.object({
    id : z.string().regex(/^[0-9a-fA-F]{24}$/, { message: "Invalid user ID format" }),
})



const userType = z.object({
    firstName: z.string()
        .min(1, { message: "First name is required" })
        .trim(),
    lastName: z.string()
        .min(1, { message: "Last name is required" })
        .trim(),
    email: z.string()
        .email({ message: "Invalid email format" })
        .trim()
        .toLowerCase(),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters long" }),
});

const UserSignType = z.object({
    email : z.string().min(1, {message : "please enter email"})
    .email({message:"Invalid email format"})
    .trim()
    .toLowerCase(),
    password: z.string()
    .min(6, { message: "Password must be at least 6 characters long" }),
    
})


module.exports = { createSchema, updateSchema , userType , UserSignType};

