import { useState } from 'react'
import Home from './Component/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './Component/About'
import './App.css'



const router = createBrowserRouter([

  {
    path: "/",
    element : <Home/>
  },

  {
    path: "/about",
    element : <About/>
  }



])
function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
