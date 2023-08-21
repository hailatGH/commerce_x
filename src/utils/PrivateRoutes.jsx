import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = () => {
  const { currentUser } = useAuth();
  return (currentUser ? <Outlet /> : <Navigate to="/commerce_x/signin/" />)
};

export default PrivateRoutes;
