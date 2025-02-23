"use server"

import { prisma } from "@/db";


export async function signup(username : string , password : string , name : string) {
    try {
        await prisma.user.create({
            data : {
                username : username,
                password: password,
                name : name
            }
        });
        return true 
    } catch (error) {
        return false
    }
}
