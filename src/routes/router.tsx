import { createBrowserRouter } from "react-router-dom";
import TestPage from "./shared/TestPage.tsx";


const router = createBrowserRouter([
  {
    path: "/test",
    Component: TestPage,
  }
])

export default router