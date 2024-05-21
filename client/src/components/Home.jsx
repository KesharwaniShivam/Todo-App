import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Context, server } from '../main';
import toast from 'react-hot-toast';
import Tasks from './Tasks';



function Home() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false)



  const updateHandler = async(id)=>{

    try {
      const {data} = await axios.put(`${server}/tasks/${id}`,{},
      {
        withCredentials : true,
      }
    )
    
    toast.success(data.message);
    setRefresh((prev)=> !prev);

    } catch (error) {
      toast.error(error.response.data.message)
    }
    
  }

  const deleteHandler = async(id)=>{

    try {
      const {data} = await axios.delete(`${server}/tasks/${id}`,{
        withCredentials: true,
      })
      toast.success(data.message)
      setRefresh((prev)=> !prev)
    } 
    catch (error) {
      toast.error(error.response.data.message)
    }
 
  }

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
    setRefresh((prev)=> !prev);
      
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
  }, [refresh])

  
  
  return (
    <>
       <div className='addTodo'>
        <div className='sm:h-[50vh] h-[70vh] flex justify-center items-center '>
        <section className='sm:h-[40vh] h-[35vh]  sm:w-[40vw] w-[32vh] bg-zinc-200  flex justify-center items-center  rounded-xl border-2  border-gray-800'>
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
      <div className=' flex flex-col justify-center items-center flex-wrap -mt-15 sm:mt-0 '>
        {
          tasks.map((i)=>(
            <div className='sm:h-[10vh] sm:w-[40vw] w-[70vw] mb-5 border-2 border-gray-800 rounded-md p-3 '>
            <Tasks 
            title = {i.title} 
            description = {i.description}
            isCompleted={i.isCompleted}
            updateHandler = {updateHandler}
            deleteHandler = {deleteHandler}
            id = {i._id}
            />
            </div>
          ))
        }
      </div>
    </section>
    </>
  )
}

export default Home