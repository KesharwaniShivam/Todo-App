import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='sm:h-[80vh] h-[70vh] flex justify-center items-center '>
        <section className='sm:h-[50vh] h-[40vh]  sm:w-[30vw] w-[30vh] bg-zinc-200 flex justify-center items-center  rounded-xl border-2 border-purple-800'>
            <form>
                <div className='flex flex-col sm:w-[20vw] w-[50vw] text-lg py-[3vh] gap-6 tracking-tighter '>
                
                <input 
                className='border-2 border-zinc-900'
                type="email" 
                placeholder='Email'/>
                
               <input 
               className='border-2 border-zinc-900' 
               type="password" 
               placeholder='Password'/>
               
                </div>
                <button 
                type='submit'
                className='bg-purple-800 px-6 py-2 rounded-md text-white font-semibold mb-[1.5vh]' 
                >Login
                </button>

                <h3 className='mb-[1.5vh]'>or</h3>

                <Link to="/register"
                className='bg-purple-800 px-6 py-2 rounded-md text-white font-semibold ' 
                >Sign Up</Link>
            </form>
        </section>
    </div>
  )
}

export default Login