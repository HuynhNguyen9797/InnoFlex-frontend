import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IPrivateRoute {
  isAccessible: boolean;
  
}

const PrivateRoute = ({ isAccessible }: IPrivateRoute) => {
  return !!isAccessible ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
