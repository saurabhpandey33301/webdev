import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([]);
  
  //use effect k chlte jb jb todos update hoga tb tb site  re-render hoga...
  useEffect(()=>{
      //u can use set timeInterval here to make site re-render after some interval.....
      axios.get("http://localhost:3000/todos")
      .then( Response =>{
        setTodos(Response.data.todos);
      })
      
    
  },[todos]);

  return (
    <div>
    <CreateTodo ></CreateTodo>
    <Todos  todos = {todos}></Todos>
    </div>
  )
}

export default App