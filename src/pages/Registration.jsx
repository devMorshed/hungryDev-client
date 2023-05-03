import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const Registration = () => {
	const { handleNewUser, handleUpdate } = useContext(authContext);
	const [errMsg, setErrMsg] = useState("");

	const handleSignUp = (event) => {
		event.preventDefault();
		// console.log(event);
		const email = event.target.email.value;
		const password = event.target.password.value;
		const name = event.target.name.value;
		const photo = event.target.photo.value;

		if (password.length < 6) {
			setErrMsg("Password must be at least 6 character long !!! ");
		} else {
			setErrMsg("");
			handleNewUser(email, password);

			const delay = setTimeout(() => {
				handleUpdate(name, photo);
			}, 5000);
		}
	};

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		console.log("This will run every second!");
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, []);

	return (
		<div className="flex px-10 flex-col items-center flex-grow justify-center bg-gray-100">
			<div className="w-full max-w-md">
				<form
					onSubmit={handleSignUp}
					className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4 space-y-5">
					<div>
						<label
							className="block text-gray-700"
							htmlFor="name">
							Name
						</label>
						<input
							className=" border rounded w-full px-3 text-gray-700"
							id="name"
							type="text"
							placeholder="John Doe"
							required
						/>
					</div>
					<div>
						<label
							className="block text-gray-700"
							htmlFor="photo">
							Photo URL
						</label>
						<input
							className=" border rounded w-full px-3 text-gray-700"
							id="photo"
							type="text"
							placeholder="https://example.com"
							required
						/>
					</div>
					<div>
						<label
							className="block text-gray-700"
							htmlFor="email">
							Email
						</label>
						<input
							className=" border rounded w-full px-3 text-gray-700"
							id="email"
							type="email"
							placeholder="Email"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700"
							htmlFor="password">
							Password
						</label>
						<input
							className=" border rounded w-full px-3 text-gray-700"
							id="password"
							type="password"
							placeholder="Password"
							required
						/>
					</div>

					{errMsg && (
						<div className="my-4 text-center text-warning rounded-md">
							{errMsg}
						</div>
					)}

					<div className="mt-4">
						<button
							className="bg-orange-400 btn  hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mx-auto  block "
							type="submit">
							Sign Up
						</button>
					</div>
				</form>
				<div className="flex justify-center gap-4 items-center">
					<p>Already a user?</p>
					<Link to={"/login"}>
						<button className="btn btn-outline btn-md rounded ">
							Sign In
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Registration;
