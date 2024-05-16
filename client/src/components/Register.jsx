import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"
import { Context, server } from '../main';
import toast from 'react-hot-toast';

function Register() {


  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const {isAuthenticated, setIsAuthenticated, loading , setLoading} = useContext(Context);

  const submitHandler = async(e) => {
    e.preventDefault();
    // console.log(name, email, password)

    setLoading(true);
  
   try { 
    const {data} = await axios.post(`${server}/users/new`,
    {
      name, email, password
    } ,
    {
      headers : {
        "Content-Type" : "application/json",
      },
      withCredentials : true
    }
    )
    toast.success(data.message);
    setIsAuthenticated(true);
    setLoading(true);
   } 
   catch (error)
    {
    toast.error("some error")
    console.log(error);
    setIsAuthenticated(false);
    setLoading(false);
   }
  }

  if(isAuthenticated) return <Navigate to={"/"}/>

  return (
    <div className='sm:h-[80vh] h-[70vh] flex justify-center items-center '>
        <section className='sm:h-[50vh] h-[40vh]  sm:w-[30vw] w-[30vh] bg-zinc-200 flex justify-center items-center  rounded-xl border-2 border-purple-800'>
            <form onSubmit={submitHandler}>
                <div className='flex flex-col sm:w-[20vw] w-[50vw] text-lg py-[3vh] gap-6 tracking-tighter '>
                
                <input 
                className='border-2 border-zinc-900'
                type="text" 
                placeholder='Name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
              

                <input 
                className='border-2 border-zinc-900'
                type="email" 
                placeholder='Email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                
               <input 
               className='border-2 border-zinc-900' 
               type="password" 
               placeholder='Password'
               value={password}
               onChange={(e)=> setPassword(e.target.value)}
               />
               
                </div>
                <button 
                disabled= {loading}
                type='submit'
                className='bg-purple-800 px-6 py-2 rounded-md text-white font-semibold mb-[1.5vh]' 
                >Sign Up
                </button>

                <h3 className='mb-[1.5vh]'>or</h3>

                <Link to="/login"
                className='bg-purple-800 px-6 py-2 rounded-md text-white font-semibold ' 
                >Login</Link>
            </form>
        </section>
    </div>
  )
}

export default Register