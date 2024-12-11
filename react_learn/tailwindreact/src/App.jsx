import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-md mb-4 ml-5'>Dhanraj Jadhav</h1>
     <Card username = "dhanraj" />
    </>
  )
}

export default App
