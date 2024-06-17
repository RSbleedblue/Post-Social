import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = () => {
  const { isAuthenticate } = useAuth();
  return isAuthenticate ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
