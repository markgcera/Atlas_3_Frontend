import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import "css/testpage.css"
import resolveURL from "@/api/fetch.ts";


const getResourceOptions = {
  queryKey: ['resourceData'],
  queryFn: () => fetch(resolveURL('/resource')).then((res) => res.json())
}


function TestPage() {
  const [count, setCount] = useState(0)

  const { isPending, data } = useQuery(getResourceOptions)

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
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default TestPage