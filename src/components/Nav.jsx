import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import NavBtn from "./NavBtn";
import { authContext } from "../Provider/AuthProvider";

const Nav = () => {
	const { user, loading } = useContext(authContext);
	// console.log(loading);

	return (
		<div className="sticky top-0 right-0 left-0 my-4 z-10 ">
			<div className="container rounded bg-orange-300 shadow-lg py-2 px-10  flex justify-between items-center mx-auto">
				<Link to={"/"}>
					<h2 className=" text-xl lg:text-4xl">Hungry Dev</h2>
				</Link>
				<div className="flex items-center gap-4">
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
