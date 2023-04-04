import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";

function ProtectedRoute({ admin }) {
  const { loggedIn, user } = useAuth();

  if (!loggedIn) {
    return <Navigate to="/signin" />;
  }

  if (admin && user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
