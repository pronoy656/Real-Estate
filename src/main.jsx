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
        element: <HosteiDetails></HosteiDetails>,
        loader: () =>
          fetch("https://pronoy656.github.io/assignment-9/loadData.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
