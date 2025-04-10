import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <h1>Vaibhav Bedarkar</h1>
      <h2>CI/CD Deployment</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      
    </>
  )
}

export default App
