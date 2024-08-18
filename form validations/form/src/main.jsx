import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WithYup from "./component/WithYup";
import ManualForm from './component/ManualForm.jsx'



const routing = createBrowserRouter([
{
  path : "" , element : <App/>
}, 
{
  path : "/manualform" , element : <ManualForm/>
}, 
{path : "/withyup" , element : <WithYup/>}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routing}>

    </RouterProvider>
  </StrictMode>,
)
