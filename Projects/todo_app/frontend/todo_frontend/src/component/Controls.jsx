    import React from 'react'
    
    const Addtask = () => {

    }
    const DeleteTask = () => {

    }
    
    function Controls() {
      return (
        <>
        <div className='flex flex-wrap gap-3 justify-center px-3 py-2 bg-white rounded-2xl'> 
        <button onClick={Addtask} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Add Task
      </button>   
      <button onClick={DeleteTask} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Delete task
      </button>   
        </div>
        </>
      )
    }
    
    export default Controls