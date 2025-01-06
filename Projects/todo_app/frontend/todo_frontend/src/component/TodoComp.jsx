import React from 'react'

function TodoComp () {
  return (
    <>
      <div className='w-9/12 mx-auto '>
        <div className='flex p-2 border-2 justify-evenly border-black mx-auto w-8/12 m-5'>
          <input type='checkbox' />
          <div className='text-pretty font-medium'>Demo Task</div>
        </div>
      </div>
    </>
  ) 
}

export default TodoComp
