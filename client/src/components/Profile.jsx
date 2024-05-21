import React, { useContext, useEffect } from 'react'
import { Context } from '../main'
import Loader from './Loader'

function Profile() {

  const{user, isAuthenticated, loading} = useContext(Context)


  

  // console.log(user)

  return (
    <>
    {loading? <Loader/> : 
    <div className='h-[60vh] flex flex-col justify-center items-center'>
    <h1 className='text-4xl font-semibold uppercase'>Name : {user?.name}</h1>
    <h4 className='text-xl font-medium '>Email : {user?.email}</h4>
    </div>}
    
    </>
  )
}

export default Profile