import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import DyHome, {loader } from "./Components/Home/DyHome.jsx";
import Login from "./Components/Auth/Login.jsx";
import Signup from "./Components/Auth/Signup.jsx";
import { useState } from "react";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/home" element={<Layout />}>
        <Route element={<Home />}>
          <Route index element={<DyHome />} loader={loader} />
          {/* <Route path="feed" /> */}
        </Route>
      </Route>
      <Route path="/login" element= {<Login />} />
      <Route path="/signup" element= {<Signup/>} />
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