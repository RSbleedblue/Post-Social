import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
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
      <RouterProvider> router = {router}</RouterProvider>
    </>
  )
}

export default App
