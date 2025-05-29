import React, { useState } from 'react'
import UserContext from './Context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserCOntextProvider'
import  './App.css'

function App() {
  
  
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
