import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home  from './containers/Home/Home'
import Projects from './containers/Projects/Project'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/projects",
    element: <Projects/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
