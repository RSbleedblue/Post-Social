import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route, Routes
} from "react-router-dom";


//import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import { useState } from "react";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
function App() {
  
const [isLoggedIn,setIsLoggedIn] = useState(false);


  return (
    <div>
       <Routes>
        {
          console.log("we are here ")
        }
          <Route path="/" element= {<Home/>} />
          <Route path="/login" element= {<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element= {<Signup setIsLoggedIn={setIsLoggedIn}/>} />


      {/* <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} /> */}

      </Routes>

    </div>
   

  );
}

export default App;
