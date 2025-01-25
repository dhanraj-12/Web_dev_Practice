import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import TodoComp from './TodoComp'

function Header () {
  const navigate = useNavigate();
  const [isloged, setloged] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setloged(true)
    } else {
      setloged(false)
    }
  }, [])



  const handleLogin = ()=>{
    navigate('/signup')
  }




  return (
    <>
      <div className='flex w-6/12 mx-auto p-4 items-center'>
        <div className=' p-4 mx-auto bg-slate-200 rounded-md mt-5 border-2 border-black '>
          <h1 className='text-3xl font-bold text-center'>
            Welcome to Todo App
          </h1>
          <p className='text-lg text-center mt-5'>
            This is a simple Todo App. You can add, delete and update your
            todos.
          </p>
        </div>
        {!isloged && (
          <button onClick={handleLogin} className='px-4 py-2 h-1/5 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
            Login
          </button>
        )}
      </div>
    </>
  )
}

export default Header
