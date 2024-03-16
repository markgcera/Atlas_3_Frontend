import { createBrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import TestPage from "./shared/TestPage.tsx";
// import { loader } from "./shared/loader.tsx";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
})


const router = createBrowserRouter([
  {
    path: "/",
    Component: TestPage,
    // loader: loader(queryClient)
  }
])

export default router