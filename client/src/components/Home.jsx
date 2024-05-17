import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { server } from '../main';
import toast from 'react-hot-toast';
import Tasks from './Tasks';


function Home() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState(false);
  const [tasks, setTasks] = useState([]);

  const submitHandler = async(e)=>{
    e.preventDefault();
    try {
      setLoader(true);
      const {data} = await axios.post(`${server}/tasks/new`,{
        title,
        description,
      },{
        withCredentials : true,
        headers : {
          "Content-Type" : "application/json",
        },
      }

    )
    toast.success(data.message);
    setLoader(false);
    setTitle("");
    setDescription("");
      
    } catch (error) {
      toast.error(error.response.data.message);
      setLoader(false)
    }
  }

  useEffect(() => {
    axios.get(`${server}/tasks/mytask`,
    {
      withCredentials : true,
    })
    .then(res=>{
      setTasks(res.data.tasks);
    })
    .catch((error)=>
      {
      toast.error(error.response.data.message)
    })
  }, [])
  
  return (
    <>
       <div className='addTodo'>
        <div className='sm:h-[50vh] h-[70vh] flex justify-center items-center '>
        <section className='sm:h-[40vh] h-[40vh]  sm:w-[40vw] w-[30vh] bg-zinc-200 flex justify-center items-center  rounded-xl border-2 border-gray-800'>
            <form onSubmit={submitHandler}>
                <div className='flex flex-col sm:w-[30vw] w-[50vw] text-lg py-[3vh] gap-6 tracking-tighter '>
                
                <input 
                className='border-2 border-zinc-900'
                type="text" 
                placeholder='Title'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                
               <input 
               className='border-2 border-zinc-900' 
               type="text" 
               placeholder='Description'
               value={description}
               onChange={(e)=> setDescription(e.target.value)}
               />
               
                </div>
                <button 
                disabled = {loader}
                type='submit'
                className='bg-purple-800 px-6 py-2 rounded-md text-white font-semibold mb-[1.5vh]' 
                >Add Task
                </button>

            

                
            </form>
        </section>
    </div>
    </div>

    <section className='todoContainer'>
      <div className=' flex flex-col justify-center items-center'>
        {
          tasks.map((i)=>(
            <div className='h-[10vh] w-[40vw] mb-5 border-2 border-gray-800 rounded-md p-3'>
            <Tasks title = {i.title} description = {i.description}/>
            </div>
          ))
        }
      </div>
    </section>
    </>
  )
}

export default Home