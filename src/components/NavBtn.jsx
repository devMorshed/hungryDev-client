import React from "react";
import { NavLink } from "react-router-dom";

const NavBtn = ({ to, children }) => {
	return (
		<NavLink
			className={({ isActive }) => (isActive ? "underline" : "") }
			to={to}>
			{children}
		</NavLink>
	);
};

export default NavBtn;
