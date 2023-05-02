import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
