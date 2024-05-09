import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
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
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </ul>
          </article>
        </div>
      </nav>
    </>
  )
}

export default Header;