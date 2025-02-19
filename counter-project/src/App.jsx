import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const addCounter = () => {
    if(counter>=20){
      alert("Limit exceeded")
      setCounter(value=20)
    }
    else{
    setCounter(counter + 1)
    }
  }
  const subtractCounter = () => {
    if (counter<=0){
      alert("Counter value cannot be negative")
      setCounter(value=0)
    }
    else{
    setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addCounter}>Increment</button>
      <br></br>
      <button onClick={subtractCounter}>Decrement</button>
      <br></br>
    </>
  )
}

export default App
