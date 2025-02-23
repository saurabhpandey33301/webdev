// import { StrictMode } from 'react'


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure CSS is imported!

createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <App />
    <ToastContainer position="bottom-right" autoClose={2000} />
  </RecoilRoot>
 
)
