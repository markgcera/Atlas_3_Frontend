import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import './assets/css/reset.css'

const queryClient = new QueryClient()

async function enableMocking() {
  if (!import.meta.env.DEV || import.meta.env.VITE_IGNORE_MSW.toLowerCase() === "true") {
    return
  }

  const { worker } = await import('./mocks/worker')

  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App/>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </React.StrictMode>,
  )
})
