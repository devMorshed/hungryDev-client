import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import SpinnerSkeleton from "../components/SpinnerSkeleton";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(authContext);
	const location = useLocation();

	if (loading) {
		return <SpinnerSkeleton />;
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
