import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Auth from "./layout/auth/Auth";
import Home from "./layout/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Auth></Auth>,
    children : [
      {
        path : "/",
        element : <Navigate to={"home"}></Navigate>
      },
      {
        path : "login",
        element : <Login></Login>
      },
      {
        path : "register",
        element : <Register></Register>
      }
    ]
	},
  {
    path : "home",
    element : <Home></Home>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
