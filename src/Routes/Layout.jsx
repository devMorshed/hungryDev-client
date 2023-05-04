import React from "react";
import Nav from "../components/Nav";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import AbsoluteBG from "../components/AbsoluteBG";
import SpinnerSkeleton from "../components/SpinnerSkeleton";

const Layout = () => {
	const navigation = useNavigation();

	return (
		<div className="flex flex-col min-h-screen relative">
			<AbsoluteBG
				src={"https://i.ibb.co/GCMWfKC/lightbg.jpg"}
				style={"opacity-5 contrast-[60%]"}
			/>

			<ToastContainer />
			<Nav />

			<div>{navigation.state === "loading" ? <SpinnerSkeleton  /> : <Outlet/>}</div>

			<Footer />
		</div>
	);
};

export default Layout;
