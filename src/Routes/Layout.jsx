import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<ToastContainer />
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
