import React from "react";
import { NavLink } from "react-router-dom";

const NavBtn = ({ to, children }) => {
	return (
		<NavLink
			className={({ isActive }) =>
        isActive
          ? "underline font-bold text-orange-700"
          : "font-bold"
			}
			to={to}>
			{children}
		</NavLink>
	);
};

export default NavBtn;
