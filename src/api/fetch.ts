const setApiURL = () => {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_IGNORE_MSW === "true" ? "http://localhost:8000" : "http://localhost:5173"
  }
  return import.meta.env.VITE_API_URL
}

export const apiURL = setApiURL()

export default function resolveURL(path: string): string {
  return `${apiURL}${path}`
}