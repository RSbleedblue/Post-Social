import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import DyHome from "./Components/Home/DyHome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/home" element={<Layout />}>
        <Route element={<Home />}>
          <Route index element = {<DyHome /> }/>
          {/* <Route path="feed" /> */}
        </Route>
  
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
