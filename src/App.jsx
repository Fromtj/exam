import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./layout/layout"
import Todo from "./pages/todo/todo"
import Byid from "./pages/byid/byid"

export default function App() {
  let router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Todo />,
        },
        {
          path: "/:id",
          element: <Byid />,
        }
      ]
    }
  ])
  return(<><RouterProvider router={router} /></>)
}