import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Profile from "./components/Profile"
import Login from "./components/Login"
import Register from "./components/Register"


function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
  </Routes>
  
  </BrowserRouter>
}

export default App
