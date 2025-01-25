import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-ro  uter-dom'
import {Home, Login} from "./component/index"
import './App.css'
import React from 'react'

const router = createBrowserRouter([
   {
    path : "/",
    element : <Home/>
   },
   {
    path : "/signup",
    element : <Login/>
   }
  
])

function App() {

  return (
    <>
     <RouterProvider router = {router}/>
      
    </>
  )
}

export default App
