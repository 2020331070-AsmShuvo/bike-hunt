import React, { useContext } from "react";
import { AuthContext } from "./../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading)
    return <span className="loading loading-spinner loading-lg"></span>;
  if (user?.email) {
    console.log(user?.email);
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
