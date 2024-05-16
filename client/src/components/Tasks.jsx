import React from 'react'

function Tasks({title, description}) {
    return (
        <div className='todo'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <p className='text-sm tracking-tight'>{description}</p>
        </div>
    )
}

export default Tasks