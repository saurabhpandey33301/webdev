import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.user.findMany().then((users) => {
  console.log(users);
});

async function InsertUser(username:string, password:string,firstName:string,lastName:string){
    const res  = await prisma.user.create({
        data:{
            email : username,
            password,
            firstName,
            lastName
        },
        select:{
            id:true,
            password:true,
        }
    })
    console.log(res);
}

InsertUser("spandey3301@gmail.com","1234567","Saurabh", "Pandey");