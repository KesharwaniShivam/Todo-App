import React from 'react'

function Tasks({title, description, isCompleted, updateHandler, deleteHandler, id}) {
    return (
        <div className='w-full flex items-center justify-between '>
            <div>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <p className='text-sm tracking-tight'>{description}</p>
            </div>

            <div className='flex items-center sm:gap-[0.5vw] gap-2'>
             <p className='sm:text-[1.2vw] text-md'>completed</p>  

            <input 
            type="checkbox" 
            className='scale-[150%]' 
            onChange={()=> updateHandler(id)} 
            checked={isCompleted} 
            />

            <button 
            className='px-[1vw] py-[0.6vh] ml-[0.8vw] bg-red-600 shadow-md rounded-md hover:bg-red-700' 
            onClick={()=> deleteHandler(id)}>
                Delete
            </button>
            </div>
        </div>
    )
}

export default Tasks