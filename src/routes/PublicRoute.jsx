/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { Navigate, Outlet } from "react-router-dom";

import { getToken } from "../helper/sessionHelper";
import { jwtDecode } from "jwt-decode";

const PublicRoute = () => {
  let token = getToken();
  let decoded;
  if (token) {
    decoded = jwtDecode(token).role;
  } else {
    token = null;
  }

  if (token && decoded === "admin") {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  // If the user is authenticated and is an admin, allow access to the route
  return <Outlet />;
};

export default PublicRoute;
