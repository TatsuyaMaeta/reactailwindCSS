import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from "./assets/vite.svg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"><div className="text-7xl">Hello React x TailwindCSS!!</div>

      <div className="flex justify-evenly">

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo}  className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
