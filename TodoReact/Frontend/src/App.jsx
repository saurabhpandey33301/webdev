
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import { Home } from './components/Home';


function App() {

  return (

    <>
    <BrowserRouter>
        
        <Routes>
            <Route path="/dashboard" element={ <Dashboard/> } />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={ <Signup/> } />
            <Route path="/home" element={ <Home/> } />
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App