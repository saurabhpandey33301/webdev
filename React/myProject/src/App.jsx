import { useState } from 'react'


function App() {
  //state..
  const [todos, setTodos] = useState([]);

  function addTodo(){

    // let newTodos = [];
    // for (let i = 0; i<todos.length;i++){
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push({
    //   title:"saurabh",
    //   description : "hero"
    // })
    // setTodos(newTodos);

    //ya simply ase kro..
    
    setTodos([...todos,{
       title : "saurabh",
       description: "dada"
    }])
 }

  return (
    <>
      <div>
        <button onClick={addTodo}>
           Add a random todo
        </button>
        {todos.map( (todo)=>{
          return <Todo title = {todo.title} description = {todo.description} />
        })
        }
      </div>
    </>
  )
}

//component
function Todo(props){
     return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
     </div>
}


//component..
// function CustomButton(props){

//   function onClickHandler() {
//     props.setCount(props.count+1); 
//   }
  
//   return(
//     <button onClick={onClickHandler}>Counter {props.count}</button>
//   )

// }

export default App


// jsx -> js + xml.