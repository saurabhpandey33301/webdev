export function Todos({todos}){
       return (
          <div >
              {todos.map((todo)=>{
                    return <div key = {todo.id}>
                        <h1>{todo.id}</h1> 
                        <h1>{todo.title}</h1>
                        <h4>{todo.description}</h4>
                        <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                    </div>
              },)}
          </div>
       )
}