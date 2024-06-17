import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import DyHome, { loader as DyLoader } from "./Components/Home/DyHome.jsx";
import Login from "./Components/Auth/Login.jsx";
import Signup from "./Components/Auth/Signup.jsx";
import FriendsList, {
  loader as FriendsLoader,
} from "./Components/Friends/Friends.jsx";
import ChatBox from "./Components/Chats/ChatBox.jsx";
import { AuthProvider } from "./Components/Auth/AuthContext.jsx";
import PrivateRoute from "./Components/Auth/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRoute/>}>
          <Route element={<Home />}>
            <Route index element={<DyHome />} loader={DyLoader} />
            <Route
              path="friends"
              element={<FriendsList />}
              loader={FriendsLoader}
            />
          </Route>
        </Route>
        <Route path="chat" element={<ChatBox />} />
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
