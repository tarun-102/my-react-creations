import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passwords ,setPasswords] = useState("");
  

  const passwordRef = useRef(null);
const passwordgenerator = useCallback(() => {
  let pass = "";
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numberAllowed) str += '0123456789';
  if(charAllowed) str += '!@#$%^&*()_+-[]{}';

  for(let i = 1; i <= length; i++){
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }
  setPasswords(pass);
},[length,numberAllowed,charAllowed,setPasswords]);
  
  const copyClickboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(passwords);
  } ,[passwords])
  useEffect(() =>{
    passwordgenerator();
  }, 
  [length,numberAllowed,charAllowed,passwordgenerator])

  return (
    <>
     <div className='div1'>
     <h1>Passwords Generator</h1>
      <div className='divinput'>
        <input type="text"
         value={passwords} 
         placeholder='Passswords' 
         ref={passwordRef}
         readOnly />
         <button onClick={copyClickboard}>Copy</button>
      </div>
      <div className='lengthbar'>
        <input type="range" 
        value={length}
        min={8}
        max={100} 
        onChange={(e) => setLength(Number(e.target.value))}/>
        <label>Length:{length}</label>

        <input type='checkBox' checked={numberAllowed} id='numberInput' onChange={() => setNumberAllowed((prew) => !prew)}></input>
        <label>Number</label>
        <input type='checkBox' checked={charAllowed} id='characterInput' onChange={() => setCharAllowed((prew) => !prew)}></input>
        <label>Character</label>
      </div>

     </div>
      
    </>
  )
}

export default App
