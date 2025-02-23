// import { Hono } from 'hono'
// import "dotenv/config";


// import {v2 as cloudinary} from "cloudinary";
// import {serve} from "@hono/node-server"
// import { encodeBase64 } from 'hono/utils/encode';

// const app = new Hono()


// app.use(async(_c , next)=>{
//       cloudinary.config({
//          cloud_name : process.env
//          api_key :  "895465816239776",
//          api_secret : "DfeA70pgrOrwL9UdZ3XkxVwO8g0"
//       });
//       await next()
// })

// app.post("/upload" , (c)=> c.req.parseBody().then(async(body)=>{
//      const image = body["image"] as File;
//      const byteArrayBuffer = await image.arrayBuffer();
//      const base64 = encodeBase64(byteArrayBuffer);
//      const results = await cloudinary.uploader.upload(`data:image/png;base64, ${base64}`);
//      console.log(results);
//      return c.json(results)
// }))





// const port = 3000;
// serve({
//    fetch : app.fetch,
//    port
// })

// // export default app




import "dotenv/config";
import { Hono } from "hono";
import { v2 as cloudinary } from "cloudinary";
import { serve } from "@hono/node-server";

const app = new Hono();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.post("/upload", async (c) => {
  const contentType = c.req.header("content-type");

  if (!contentType?.includes("multipart/form-data")) {
    return c.json({ error: "Invalid Content-Type" }, 400);
  }

  const formData = await c.req.parseBody();

  if (!formData.image) {
    return c.json({ error: "No image provided" }, 400);
  }

  if (!(formData.image instanceof File)) {
    return c.json({ error: "Invalid image file" }, 400);
  }
  const imageBuffer = Buffer.from(await formData.image.arrayBuffer());
  const base64Image = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  try {
    const result = await cloudinary.uploader.upload(base64Image);
    return c.json(result);
  } catch (error) {
    return c.json({ error: "Upload failed", details: (error as Error).message }, 500);
  }
});

const port = 3000;
serve({
  fetch: app.fetch,
  port,
});

console.log(`Server running on http://localhost:${port}`);
