import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./Components/Auth/AuthContext.jsx";
import Login from "./Components/Auth/Login.jsx";
import PrivateRoute from "./Components/Auth/PrivateRoute.jsx";
import Signup from "./Components/Auth/Signup.jsx";
import Home, { loader as DyLoader } from "./pages/Home.jsx";
import HomeLayout from "./shared/HomeLayout.jsx";
import Layout from "./shared/Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRoute/>}>
          <Route element={<HomeLayout />}>
            <Route index element={<Home />} loader={DyLoader} />
          </Route>
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
