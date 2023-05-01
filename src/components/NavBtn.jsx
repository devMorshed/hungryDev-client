import React from "react";
import { NavLink } from "react-router-dom";

const NavBtn = ({ to, children }) => {
	return (
		<NavLink
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "underline" : ""
			}
			to={to}>
			{children}
		</NavLink>
	);
};

export default NavBtn;
