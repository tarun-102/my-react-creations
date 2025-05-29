import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
    let username;
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4
      '>Telwind Test</h1>
     <Card username = "Tarun 102 Gaming"/>
     <Card  />
     
    </>
  )
} 

export default App
