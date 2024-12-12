import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setCount] = useState("olive")

  // color = ''
  return (
    <>
    
    <div className='h-screen w-screen' style={{backgroundColor: color}} >
      <div className='fixed bottom-12 inset-x-0 border-black-100 flex flex-wrap justify-center'>
        <div className='flex flex-wrap gap-3 justify-center px-3 py-2 bg-white rounded-2xl'> 
          <button onClick={() => setCount("red") } className='text-white outline-none px-4 py-1 bg-red-700 rounded-full shadow-lg'>Red</button>
          <button onClick={() => setCount("green") } className='text-white outline-none px-4 py-1 bg-green-700 rounded-full shadow-lg'>Red</button>
          <button onClick={() => setCount("blue") } className='text-white outline-none px-4 py-1 bg-blue-700 rounded-full shadow-lg'>Green</button>
          <button onClick={() => setCount("gray") } className='text-white outline-none px-4 py-1 bg-gray-500 rounded-full shadow-lg'>Gray</button>
          <button onClick={() => setCount("yellow") } className='text-white outline-none px-4 py-1 bg-yellow-300 rounded-full shadow-lg'>Yellow</button>
          <button onClick={() => setCount("pink") } className='text-white outline-none px-4 py-1 bg-pink-200 rounded-full shadow-lg'>Pink</button>

        </div>
      </div>
    </div>
    </>

  )
}

export default App
