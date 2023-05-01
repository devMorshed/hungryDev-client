import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const Registration = () => {

  const { handleNewUser } = useContext(authContext);

	const handleSignUp = (event) => {
		event.preventDefault();
		console.log(event);
		const email = event.target.email.value;
		const password = event.target.password.value;
		handleNewUser(email, password);
	};
	return (
		<div className="flex flex-col items-center justify-center h-[800px] bg-gray-100">
			<div className="w-full max-w-md">
				<form
					onSubmit={handleSignUp}
					className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="name">
							Name
						</label>
						<input
							className=" border rounded w-full py-2 px-3 text-gray-700"
							id="name"
							type="text"
							placeholder="John Doe"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="photo">
							Photo URL
						</label>
						<input
							className=" border rounded w-full py-2 px-3 text-gray-700"
							id="photo"
							type="text"
							placeholder="https://example.com"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="email">
							Email
						</label>
						<input
							className=" border rounded w-full py-2 px-3 text-gray-700"
							id="email"
							type="email"
							placeholder="Email"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="password">
							Password
						</label>
						<input
							className=" border rounded w-full py-2 px-3 text-gray-700"
							id="password"
							type="password"
							placeholder="Password"
							required
						/>
					</div>

					<div className="mt-4">
						<button
							className="bg-orange-400 btn btn-wide  hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mx-auto  block "
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
