import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter ] = useState(0)
  const addValue = () =>{
    console.log("click", counter)
    setCounter(counter+1)
  }

  const decValue = () =>{
    console.log("click", counter)
    setCounter(counter-1)
  }

  return (
    <>
      
      <h1>React Project</h1>
      <h2>Counter Value : {counter} </h2>
      <button id = "btn" onClick={addValue}>Add value</button>
       <br /><br />
       <button onClick={decValue}>Decrease value</button>
    </>
  )
}

export default App
