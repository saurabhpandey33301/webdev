"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninInput = void 0;
const zod_1 = require("zod");
exports.SigninInput = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Name must be at least 3 characters long" }),
    age: zod_1.z.number().min(18, { message: "Age must be at least 18 years old" }),
    email: zod_1.z.string().email({ message: "Invalid email address" }),
});
