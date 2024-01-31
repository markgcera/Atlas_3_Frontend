const baseURL = import.meta.env.DEV ? "" : import.meta.env.VITE_API_URL

export default function resolvePath(path: string): string {
  return `${baseURL}${path}`
}