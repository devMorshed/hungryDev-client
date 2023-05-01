import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Routes/Layout";
import Home from "./Home";
import Blogs from "./pages/Blogs";
import LoginForm from "./pages/LoginForm";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <LoginForm />,
			},
			{
				path: "/blogs",
				element: <Blogs/>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router}></RouterProvider>
);
