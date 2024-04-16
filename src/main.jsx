import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root.jsx";
import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import LogIn from "./Component/LogIn/LogIn.jsx";
import Register from "./Component/Register/Register.jsx";
import HosteiDetails from "./Component/HostelDetails/HosteiDetails.jsx";
import Authprovider from "./AuthProvider/Authprovider.jsx";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute.jsx";
import UserProfile from "./Component/UserPRofile/UserProfile.jsx";
import UpdateProfile from "./Component/UpdateProfile/UpdateProfile.jsx";
import Booking from "./Component/Booking/Booking.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/hostelDetails/:id",
        element: (
          <PrivateRoute>
            <HosteiDetails></HosteiDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://pronoy656.github.io/assignment-9/loadData.json"),
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
