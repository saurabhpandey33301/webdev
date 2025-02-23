import { z } from "zod";
export declare const SigninInput: z.ZodObject<{
    name: z.ZodString;
    age: z.ZodNumber;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    age: number;
    email: string;
}, {
    name: string;
    age: number;
    email: string;
}>;
export type SignupInput = z.infer<typeof SigninInput>;
