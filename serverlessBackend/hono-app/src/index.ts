import { Hono } from 'hono'

const app = new Hono()


//get request......................
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//post request......................
app.post('/', async(c) => {
  const body = await c.req.json()
  const auth = c.req.header("Authorization")
  console.log(body," ",auth)
  return c.text(`You want to see ${body} of ${auth}`)
})

export default app




// npm create hono@latest poject-name