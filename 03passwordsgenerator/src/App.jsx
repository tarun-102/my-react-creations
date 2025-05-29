import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useref hook
  const passwordRef = useRef(null);
  const passwordsGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*{}[]_";

    for (let i = 1 ; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }                                 
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const CopyToClickboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordsGenerator();
  }, [length, numberAllowed, charAllowed, passwordsGenerator]);

  return (
    <>
      <h1>Password Generator</h1>
      <div className="tarun">
        <div className="div2">
          <input type="text" value={password} placeholder="password" readOnly ref={passwordRef} />
          <button onClick={CopyToClickboard} >Copy</button>
        </div>
        <div className="div3">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>

          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Number</label>

          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
