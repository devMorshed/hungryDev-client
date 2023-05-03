import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen relative">
			<div
				style={{
					backgroundImage: `url(https://media.istockphoto.com/id/1125918613/vector/vector-set-of-design-templates-and-elements-for-food-and-drink-in-trendy-linear-style.jpg?s=612x612&w=0&k=20&c=q7FXAex35aXqGKQ0QX-TJ4EPUNKP-fD0umaO58GEp9I=)`,
				}}
				className="absolute bg-repeat opacity-5 contrast-[60%]  top-0 right-0 left-0 bottom-0 -z-10"></div>
			<ToastContainer />
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
