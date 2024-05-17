import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import Home from './components/Home'
import Profile from "./components/Profile"
import Login from "./components/Login"
import Register from "./components/Register"
import { Toaster } from "react-hot-toast"
import Header from "./components/Header"
import { useContext, useEffect } from "react"
import axios from "axios"
import { Context, server } from "./main"




function App() {

  const { setUser, setIsAuthenticated, setLoading } = useContext(Context)

  useEffect(() => {
    setLoading(true);
    axios.get(`${server}/users/me`,
      {
        withCredentials: true
      }
    ).then(res => {
      setUser(res.data.user)
      setIsAuthenticated(true);
      setLoading(false)
    }
    ).catch((error) => {
      setUser({})
      setIsAuthenticated(false)
      setLoading(false)
    })
  }, [])


  return (
    <> 
    <div className="w-full h-screen" style={{
    backgroundImage : 'url("/todo5.jpg")', 
    backgroundRepeat : "no-repeat",
    backgroundSize : "contain"
  
    
    }}>
      <div className="w-full h-screen" style={{
    backgroundImage : 'url("/todo6.jpg")', 
    backgroundRepeat : "no-repeat",
    backgroundSize : "contain",
    backgroundPosition : "right"
    
    }}>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>


      <Toaster />
    </BrowserRouter>
    </div>
    </div>
    </>
  )
}

export default App
