import { useRecoilState, useRecoilValue , RecoilRoot, useSetRecoilState, useRecoilValueLoadable } from 'recoil'
import { countAtom, evenSelector, todosAtomFamily } from './store/Atoms/Count'
import { useMemo } from 'react';
import { Suspense } from 'react';
function App() {

  return(
    <>
      <Suspense fallback={"Loading..."}>
       <RecoilRoot>
          <Count/>
       </RecoilRoot>
      </Suspense>
    </>
  )
}

function Count(){
  return(
     <div>
         <CountRender />
         <EvenRender/>
         <Button/>
         <RecoilFetchTodoReander id ={1} />
     </div>
  )
}

function RecoilFetchTodoReander({id}){
  //advance recoil things like useRecoilValue/StateLodable....AtomFamily....SelectorFamily...etc
   const todo = useRecoilValueLoadable(todosAtomFamily(id));

   if(todo.state==="loading"){
       return(
           <div>loading..</div>
       )
   }else if (todo.state==="hasValue"){
      return(
        <div>
           <div>Title: {todo.contents?.title}</div>
           <div>Description: {todo.contents?.description}</div>
           
        </div>
      )
   }else if(todo.state==="hasError"){
      return(
        <div>something went wrong while fetching data from backend</div>
      )
   }
}

function CountRender(){
  const count = useRecoilValue(countAtom);
  return(
    <div>
        count is {count}
    </div>
  )
}

function EvenRender(){
  // const count = useRecoilValue(countAtom);

  // if(count%2==0){
  //   return (
  //     <> this is even
  //     </>
  //   )
  // }
  //fancy way ..
  // return(
  //   <>
  //      {(count%2==0) ? "it is even" : null}
  //   </>
  // )

  //Using useMemo to avoid unnecessary re-rendering...
  // const isEven = useMemo(()=>{
  //    return count%2==0
  // },[count])

  //now using selector provided by recoil 
  //which does same thing as useMemo...if we have dependencies

  //here we have learn about the use of a selector...
  const isEven = useRecoilValue(evenSelector);
  return(
    <>
       {isEven ? "y even hee" : "y odd h"}
    </>
  )
}

function Button(){
  //useSetRecoilState prevent re-rendering of 
  //button component whever it update count value.
  const setCount = useSetRecoilState(countAtom);
  console.log("btn re-render");
  
  //const [count,setCount] = useRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>{
        setCount(count => count+1);
      }}>Bdao</button>

      <button onClick={()=>{
        setCount(count => count-1);
      }}>Ghatao</button>
    </div>
  )  
}

export default App
