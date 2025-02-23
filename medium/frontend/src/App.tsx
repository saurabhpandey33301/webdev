import { BrowserRouter, Route  ,Routes } from 'react-router-dom'
import './App.css'
import  { lazy, Suspense } from "react";

import { ThemeProvider } from "./components/Theme-provider";

import "react-toastify/dist/ReactToastify.css";
import { Loading } from './subComponents/Loading';

const  Signin  = lazy(()=>import('./pages/Signin')); 

const Signup = lazy(() => import("./pages/Signup"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const BlogOne = lazy(() => import("./pages/BolgOne"));
const Profile = lazy(() => import("./pages/Profile"));
const Publish = lazy(() => import("./pages/Publish"));
const Update = lazy(() => import("./pages/Update"));
const Home = lazy(() => import("./pages/Home"));
import { RecoilRoot } from "recoil";
import { Navbar } from './components/Navbar';


function App() {
 

  return (
    <>
        
        <RecoilRoot>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
       
       <BrowserRouter>
                 <div className='bg-white dark:bg-gray-700'>
                   <Navbar />

                 </div>
                <div className='bg-white dark:bg-gray-700 w-full h-screen'>
                      <Suspense fallback={ <Loading/>  } >
                          <Routes>
                              <Route  path='/' element = {<Home/>}   />
                              <Route  path='/home' element = {<Home/>}   />
                              
                              <Route  path='/signin' element = {<Signin/>}   />
                              <Route  path='/signup' element = {<Signup/>}   />
                              <Route  path='/blog' element = {<Blog/>}   />
                              <Route  path='/about' element = {<About/>}   />
                              <Route  path='/blog/:id' element = {<BlogOne/>}   />
                              <Route  path='/profile' element = {<Profile />}   />
                              <Route  path='/publish' element = {<Publish/>}   />
                              <Route  path='/update' element = {<Update/>}   />
                          </Routes>
                      </Suspense>
                </div>
                {/* <ToastContainer
                      position="bottom-right"
                      autoClose={2000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={true}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="colored"
                      transition={Slide}
                    /> */}
                
       </BrowserRouter>
       </ThemeProvider>

      </RecoilRoot>

        
    </>
  )
}

export default App
