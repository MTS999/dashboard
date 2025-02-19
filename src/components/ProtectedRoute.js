import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const storedUser = JSON.parse(localStorage.getItem("userData")); // Check user in localStorage
console.log("data fetched");

  return storedUser ? <Outlet /> : <Navigate to="/signup" replace />;
};

export default ProtectedRoute;
