import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import NavBtn from "./NavBtn";
import { authContext } from "../Provider/AuthProvider";

const Nav = () => {
	const { user, loading } = useContext(authContext);

	return (
		<div className="sticky top-0 right-0 left-0 mb-4 z-10 ">
			<div className="container rounded bg-zinc-300 shadow-lg py-1 md:px-10  flex justify-around  items-center mx-auto">
				<Link to={"/"}>
					<h2 className="font-bold text-center transform -rotate-2">
						<span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white p-2 clip-text rounded mr-2">
							Hungry Dev
						</span>
					</h2>
				</Link>
				<div className="flex justify-between items-center gap-2 md:gap-6 xl:gap-8">
					<NavBtn to={"/"}> Home </NavBtn>
					<NavBtn to={"/blogs"}>Blogs</NavBtn>

					{/* conditional rendering of user, loader and login btn  */}

					<div className="w-12 h-12 flex items-center">
						{loading ? (
							<button className="btn btn-light btn-square loading"></button>
						) : user ? (
							<NavBtn to={"/profile"}>
								<img
									data-tooltip-id="my-tooltip"
									data-tooltip-content={user?.displayName}
									className="border-2 h-12 w-12 rounded-full"
									src={user.photoURL}
									alt="User"
								/>
							</NavBtn>
						) : (
							<div className={loading ? "hidden" : " absolute"}>
								<NavBtn to={"/login"}>Log In</NavBtn>
							</div>
						)}
					</div>
				</div>

				<Tooltip id="my-tooltip" />
			</div>
		</div>
	);
};

export default Nav;
