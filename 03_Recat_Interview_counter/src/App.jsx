import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const addVAlue = () => {
  setCount((pre) => pre + 1)  // previous value me add karge value
  setCount((pre) => pre + 1)
  setCount((pre) => pre + 1)

  // setCount(count + 1)   // count me add karega value bus
 
}
const reduceValue = () => {
  setCount(count - 1)
}
  return (
    <>
      <h2>React Interview Counter</h2>
      <h4>Counter value : {count}</h4>
      <button onClick={addVAlue}>Increase value</button>
      <br />
      <button onClick={reduceValue}>Decrease value</button>
    </>
  )
}

export default App
