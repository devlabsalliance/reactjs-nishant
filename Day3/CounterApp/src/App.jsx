import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(1)
  const addValue = () => {
    setCount(count+1);
  }
  const subValue = () => {
    setCount(count-1);
  }
  return (
    
    <>
      <h1>Counter App</h1>
      <button onClick={addValue}>Add</button>
      <button onClick={subValue}>Minus</button>
      <p>Value: {count}</p>
    </>
  )
}

export default App
