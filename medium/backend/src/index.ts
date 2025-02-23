import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/User'
import { blogRoutes } from './routes/Blog'

import { cors } from 'hono/cors'



const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>()


//middlware in hono..................................

// app.use('/api/v1/blog/*' , async(c  , next )=>{

//     const header = c.req.header("authorization") || "" ;

//     const token =  header.split(" ")[1];

//     const response = await verify(token , c.env.JWT_SECRET);

//     if(response.id){
//       next()
//     }else{
//       c.status(403)
//       return c.json({msg : "unauthorized user"}) 
//     }
    
// })
app.use("/api/*",cors());
app.route("/api/v1/user" , userRouter);
app.route("/api/v1/blog" , blogRoutes);



app.get('/', async(c) => {
  return c.text('Hello Hono!')
})


export default app
