import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(authContext);
	const location = useLocation();

	// Its just for prevent the authStateChange issue. Spinner will add from Gloobal Pending UI.

	// <div className="flex justify-center items-center">
	// 	<button className="btn btn-ghost loading"></button>
	// </div>;

	if (loading) {
		return " ";
	}

	if (user) {
		return children;
	} else {
		return (
			<Navigate
				to={"/login"}
				state={{ from: location }}
				replace></Navigate>
		);
	}
};

export default PrivateRoute;
