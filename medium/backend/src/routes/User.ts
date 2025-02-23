import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'
import { decode, sign, verify } from 'hono/jwt'
import {z} from "zod"
import { SignupInput, SigninInput, signinInput, signupInput } from "blogzod-common";

export const userRouter = new Hono<{
    Bindings : {
      DATABASE_URL : string,
      JWT_SECRET : string
    }
  }>();


userRouter.post('/signup' , async(c) => {

    const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body)
    if(!success){
      c.status(411);
      return c.text("incorrect input")
    }
    try {
      
      const user = await prisma.user.create({
        data:{
           email :  body.email,
           password : body.password,
           name : body.name 
        },
      })
      const token = await sign({id: user.id}, c.env.JWT_SECRET)
    
      return  c.text(token);
  
    } catch (error) {
      c.status(411)
      return c.text("invalid");
    }
  })
  
  userRouter.post('/signin' , async(c) => {
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body)
    if(!success){
      c.status(411);
      return c.text("incorrect input");
    }
    try {
      
      const user = await prisma.user.findUnique({
          where: {
            email: body.email
         },
      })
    
      if(!user){
          c.status(403)
          return c.text("user not found")
      }
    
      const token = await sign({id: user.id } , c.env.JWT_SECRET)
      
      c.status(200)
      return  c.text(token)
  
    } catch (error) {
       c.status(411)
       return c.text("Invalid")
    }
  
  
  })




userRouter.use( "/*" , async (c, next) => {
    const authHeader = c.req.header("authorization") || "" ;  
try {
    const user = await verify(authHeader , c.env.JWT_SECRET) as { id: string };
    if(user){
        
        c.set("jwtPayload", { id: user.id });
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



  const infoInput =  z.object({
      id : z.string().min(1,{message : "empty id"})
  })

  userRouter.post("/info", async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    // const body = await c.req.json();
    
    // const {success} = await  infoInput.safeParse(body);
    // if(!success){
    //   c.status(411);
    //   return c.text("incorrect input");
    // }
    const payload = c.get("jwtPayload") as { id: string } | undefined;

    if (!payload) {
        c.status(403);
        return c.text("Unauthorized");
    }
    
    try {
       const res = await prisma.user.findFirst({
            where : {
              id : payload.id
            },
            select : {
               name : true
            }
       })
       if(!res){
            c.status(403)
            return c.text("user not found")
       }

       c.status(200)
       return c.json(res.name)

    } catch (error) {
      c.status(403)
      return c.text("user not found")
    }
  })