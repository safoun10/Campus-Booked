import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import Auth from "./layout/auth/Auth";
import Home from "./layout/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Colleges from "./layout/colleges/Colleges";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./provider/AuthProvider";
import Admission from "./layout/admission/Admission";
import ErrPage from "./components/errPage/ErrPage";
import SingleCollegeData from "./components/singleCollegeData/SingleCollegeData";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Auth></Auth>,
		children: [
			{
				path: "/",
				element: <Navigate to={"home"}></Navigate>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "home",
		element: <Home></Home>,
	},
	{
		path: "colleges",
		element: <Colleges></Colleges>,
	},
	{
		path: "colleges/:ID",
		element: <SingleCollegeData></SingleCollegeData>
	},
	{
		path: "admission",
		element: <Admission></Admission>,
	},
	{
		path: "*",
		element: <ErrPage></ErrPage>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
			<ToastContainer />
		</AuthProvider>
	</React.StrictMode>
);


//   `/college/${id}`

/**
    useEffect(() => {
		const selectChef = info.find((chef) => (chef.id == ID.ID));
        setChef(selectChef);
		const iterableRecipes = selectChef.view_recipes;
		setRecipes(iterableRecipes);
	}, []);

 * */ 