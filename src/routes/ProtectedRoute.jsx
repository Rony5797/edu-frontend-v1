/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { Navigate, Outlet } from "react-router-dom";

import { getToken } from "../helper/sessionHelper";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = () => {
  let token = getToken();
  let decoded;
  if (token) {
    decoded = jwtDecode(token).role;
  } else {
    token = null;
  }

  if (token === null && decoded !== "admin") {
    // If the user is not authenticated, redirect to the login page
    return (
      <Navigate to="/login" state={{ message: "You are not authenticated" }} />
    );
  }

  if (decoded !== "admin") {
    // If the user is authenticated but not an admin, redirect them

    return (
      <Navigate to="/login" state={{ message: "You are not authenticated" }} />
    );
  }

  // If the user is authenticated and is an admin, allow access to the route
  return <Outlet />;
};

export default PrivateRoute;
