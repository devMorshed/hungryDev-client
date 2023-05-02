import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Routes/Layout";
import Home from "./Home";
import Blogs from "./pages/Blogs";
import LoginForm from "./pages/LoginForm";
import Registration from "./pages/Registration";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";
import Channel from "./pages/Channel";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
				// loader: () => fetch("http://localhost:5000/chefs"),
				loader: () =>
					fetch("https://hungrydev-devmorshed.vercel.app/chefs"),
			},
			{
				path: "/chefs/:id",
				element: (
					<PrivateRoute>
						<Channel />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://hungrydev-devmorshed.vercel.app/chefs/${params.id}`),
			},
			{
				path: "/login",
				element: <LoginForm />,
			},
			{
				path: "/register",
				element: <Registration />,
			},
			{
				path: "/blogs",
				element: <Blogs />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<RouterProvider router={router}></RouterProvider>
	</AuthProvider>
);
