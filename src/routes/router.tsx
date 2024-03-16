import { createBrowserRouter } from "react-router-dom";
import TestPage from "./shared/TestPage.tsx";
import App from "./App.tsx"


const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "/test",
    Component: TestPage,
  }
])

export default router