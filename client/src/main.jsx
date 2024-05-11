import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createContext } from 'react'



export const server = "https://todo-app-7z6z.onrender.com";

export const Context = createContext({isAuthenticated : false});

const AppWrapper = ()=>{

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Context.Provider value={{isAuthenticated, setIsAuthenticated}}>
    <App />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppWrapper/>
  </React.StrictMode>,
)
