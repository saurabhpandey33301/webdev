import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Title /> 
      <Description /> <br />
      <Button/> <br />
      <Filter/>
    </div>
  )
}

function Title(){
  return(
    <div>
       <input type="text" placeholder='title' />
    </div>
  )
}
function Description(){
  return(
    <div>
       <input type="text" placeholder='description' />
    </div>
  )
}

function Button(){
     return(
        <div>
           <button>Add Todo</button> 
        </div>
     )
}
function Filter(){
   return(
     <div>
        <input type="text" placeholder='filter' />
     </div>
   )
}
export default App
