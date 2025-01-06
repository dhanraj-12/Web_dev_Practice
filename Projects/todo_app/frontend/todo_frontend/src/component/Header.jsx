import React from 'react'
import TodoComp from './TodoComp'

function Header() {
  return (
    <>

    <div className='w-6/12 p-4 mx-auto bg-slate-200 rounded-md mt-5 border-2 border-black '>
        <h1 className='text-3xl font-bold text-center'>Welcome to Todo App</h1>
        <p className='text-lg text-center mt-5'>
            This is a simple Todo App. You can add, delete and update your todos.
        </p>
    </div>    
    </>
    
  )
}

export default Header