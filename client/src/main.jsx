import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createContext } from 'react'



export const server = "https://todo-app-7z6z.onrender.com";

export const Context = createContext({isAuthenticated : false});

const AppWrapper = ()=>{

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)    //its a check to disble button if loading = true so we can disable the button ,so it cant impact the API calls
  const [user, setUser] = useState({})

  return (
    <Context.Provider value={{isAuthenticated, setIsAuthenticated , loading, setLoading, user, setUser}}>
    <App />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppWrapper/>
  </React.StrictMode>,
)
