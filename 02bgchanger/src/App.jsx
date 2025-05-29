import { useState } from 'react'

function App() {

  const [color, setColor] = useState("black");
  return (
    <div
      className='width-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div
        className='fixed flex flex-wrep justify-center bottom-12 inset-x-0 px-2'><div
          className='flex flex-wrep justify-center gap-2 shadow-lg bg-white px-3 py-2  rounded-2xl'>
          <button onClick={() => setColor("White")} className='outline-none px-4 py-1 rounded-full shadow-lg'
            style={{ backgroundcolor: 'white' }}>White</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "black" }}>black</button>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: 'red' }}>Red</button>


          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' text-white
            style={{ backgroundColor: 'green' }}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' text-white
            style={{ backgroundColor: 'Blue' }}>Blue</button>

          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: 'yellow' }}>Yellow</button>

          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: 'orange' }}>Orange</button>
        </div></div>
    </div>
  )
}

export default App
