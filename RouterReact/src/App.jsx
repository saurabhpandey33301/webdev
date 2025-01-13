import { useState, lazy, useContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Suspense } from 'react';
const Dashboard = lazy(()=> import('./components/Dashboard'));
const Landing = lazy(()=> import('./components/Landing')); 
import { countContext } from './components/context';

function App() {
  const [count, setCount] = useState(0)

  //This return is about Router in React.
  // return (
  //   <BrowserRouter>
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <Routes>
  //         <Route path="/dashboard" element={<Dashboard />}/>
  //         <Route path="/" element= {<Landing />} />
  //         </Routes>
  //       </Suspense>
  //   </BrowserRouter>
  // )
   
  //This return is about ContextApi in React.
  return(
    <>
      <countContext.Provider value = {{count,setCount}} >
          <Count/>
      </countContext.Provider>
    </>
  )
}

function Count(){
      return(
         <div>
             <CountRender />
             <Button/>
         </div>
      )
}

function CountRender(){
   const {count,setCount} = useContext(countContext);
   return(
     <div>
         count is {count}
     </div>
   )
}

function Button(){

  const {count,setCount} = useContext(countContext);
  return(
    <div>
      <button onClick={()=>{
        setCount(count+1);
      }}>Bdao</button>
  
      <button onClick={()=>{
        setCount(count-1);
      }}>Ghatao</button>
    </div>
  )  
}


export default App
