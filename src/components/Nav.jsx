import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import NavBtn from "./NavBtn";
import { authContext } from "../Provider/AuthProvider";

const Nav = () => {
	const { user } = useContext(authContext);

	return (
		<div className="sticky top-0 right-0 left-0 my-4  ">
			<div className="container flex justify-between items-center mx-auto">
				<Link to={"/"}>
					<h2 className="text-4xl">Hungry Dev</h2>
				</Link>
				<div className="flex items-center gap-4">
					<NavBtn to={"/"}> Home </NavBtn>
					<NavBtn to={"/blogs"}>Blogs</NavBtn>
					{user ? (
						<NavBtn to={"/profile"}>
							<img
								data-tooltip-id="my-tooltip"
								data-tooltip-content={user?.displayName}
								className="border-2 h-10 w-10 p-3 rounded-full"
								src=""
								alt="User"
							/>
						</NavBtn>
					) : (
						<NavBtn to={"/login"}>Log In</NavBtn>
					)}
				</div>

				<Tooltip id="my-tooltip" />
			</div>
		</div>
	);
};

export default Nav;
