"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    email: zod_1.z.string().email({ message: "invalid email" }),
    password: zod_1.z.string().min(6, { message: "too short" }),
    name: zod_1.z.string().optional()
});
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().email({ message: "invalid email" }),
    password: zod_1.z.string().min(6, { message: "too short" }),
});
exports.createBlogInput = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: "title can not be empty" }),
    content: zod_1.z.string(),
    status: zod_1.z.string().min(1),
    img: zod_1.z
        .instanceof(File)
        .refine((file) => file.size > 0, "Image file is required") // Ensures file is not empty
        .refine((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type), "Only JPG, PNG, and WEBP are allowed"), // Restrict file type
});
exports.updateBlogInput = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: "title can not be empty" }),
    content: zod_1.z.string(),
    id: zod_1.z.string().uuid({ message: "invalid id" }),
    status: zod_1.z.string().min(1),
    img: zod_1.z
        .instanceof(File)
        .refine((file) => file.size > 0, "Image file is required") // Ensures file is not empty
        .refine((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type), "Only JPG, PNG, and WEBP are allowed") // Restrict file type
        .optional(),
});
