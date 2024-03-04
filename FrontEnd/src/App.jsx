
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path = "/" element = {<Layout/>}></Route>
    </>
  )
)
function App() {
  return (
    <>
      <RouterProvider router = {router}> 
        <Layout/>
      </RouterProvider>
    </>
  )
}

export default App
