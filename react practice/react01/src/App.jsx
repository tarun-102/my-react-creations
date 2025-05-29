import { useState } from 'react'
import './App.css'
import { EvaluatedModules } from 'vite/module-runner';

function App() {
  let [counter, setCounter] =  useState(0);
  
  const addvalue = () =>{
   if(counter < 20) {
    setCounter(counter +1);
   }else{
      prompt('you cross limit');
   }

    
    
  }
  const removevalue = () =>{
    if(counter > 0){
      setCounter(counter - 1);
    }else{
     alert('not reach nagative number')
    }
  }
  return (
    <>
    <h1>counter number: {counter} </h1>

    <button onClick={addvalue}>Add value</button>
    <br />
    <button onClick={removevalue}>Remove value </button>
    </>
  )
}

export default App
