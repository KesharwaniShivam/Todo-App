import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context, server } from '../main';
import axios from 'axios';
import toast from 'react-hot-toast';

function Header() {

  const {isAuthenticated, setIsAuthenticated, loading , setLoading} = useContext(Context);
console.log(isAuthenticated)

const logoutHandler = async() => {
  setLoading(true);
 try {
   await axios.get("https://todo-app-7z6z.onrender.com/users/logout",
   {
    withCredentials : true
  }
  );
  toast.success("logged Out Successfully");
  setIsAuthenticated(false);
  setLoading(false);

 } catch (error) {
  toast.error(error.response.data.message)
  console.log(error);
  setIsAuthenticated(true);
  setLoading(false);
 }
}
  return (
    <>
      <nav className='header'>
        <div className='p-[2vh] bg-purple-900 flex sm:gap-[60vw] gap-[10vw] text-white shadow-lg tracking-tight items-center'>
          <h1 className='sm:text-[3.5vh] text-[2.7vh] sm:ml-7 ml-2 font-semibold'>
            YOUR Todo.
          </h1>

          <article className='navlinks'>
            <ul className='flex sm:gap-10 gap-4 sm:text-[3vh] text-[2.2vh] sm:font-thin font-md'>
              <Link to={"/"}>Home</Link>
              <Link to={"/profile"}>Profile</Link>
             
              {
              isAuthenticated ?  <button disabled={loading} onClick={logoutHandler}>Logout</button> : <Link to={"/login"}>Login</Link>
              }
              {
              isAuthenticated ? "" : <Link to={"/register"}>Register</Link>
              }

              
            </ul>
          </article>
        </div>
      </nav>
    </>
  )
}

export default Header;