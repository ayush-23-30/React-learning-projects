import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import FormHandler from './FormHandler.jsx'
import FormWith from './FormWith.jsx'


const router = createBrowserRouter([
  {
    path : '/', 
    element : <App/>,
    children : [
      {path : "/without", element : <FormHandler/> }, 
      { path : '/with' , element : <FormWith/>} 
    ] 
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
