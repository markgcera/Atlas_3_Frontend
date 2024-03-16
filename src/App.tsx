import { useState } from 'react'
import reactLogo from '../public/react.svg'
import viteLogo from '/vite.svg'
import {useQuery} from "@tanstack/react-query";
import resolveURL from "./api/fetch.ts";
import './assets/css/App.css'

function App() {
  const [count, setCount] = useState(0)

  const { isPending, data } = useQuery({
    queryKey: ['resourceData'],
    queryFn: () => fetch(resolveURL('/resource')).then((res) => res.json())
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{isPending ? "Loading..." : data.result}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
