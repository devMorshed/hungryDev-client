import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Profile = () => {
  useTitle("Profile");

	const { user, handleSignOut } = useContext(authContext);

	const signOutHandler = () => {
		handleSignOut();
	};

	return (
		<div className="flex flex-grow justify-center items-center ">
			<div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold mb-6">Profile</h2>

				{user ? <div className="flex flex-col items-center">
					<img
						src={user.photoURL}
						alt="Profile"
						className="w-24 h-24 rounded-full mb-4"
					/>
					<p className="text-lg mb-2">Name: {user.displayName}</p>
					<p className="text-lg mb-4">Email: {user.email}</p>
					<button
						onClick={signOutHandler}
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
						Sign Out
					</button>
				</div> : <Navigate to={'/login'}/>}
			</div>
		</div>
	);
};

export default Profile;
