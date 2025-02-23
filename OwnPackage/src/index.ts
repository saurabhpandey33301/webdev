import {z} from "zod";

export const SigninInput = z.object({
  name: z.string().min(3,{message:"Name must be at least 3 characters long"}),
  age: z.number().min(18,{message:"Age must be at least 18 years old"}),
  email : z.string().email({message:"Invalid email address"}),
});

export type SignupInput = z.infer<typeof SigninInput>;