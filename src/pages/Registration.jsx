import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import useTitle from "../hooks/useTitle";

const Registration = () => {
	useTitle("Registration");

	const { auth, handleNewUser, handleUpdate } = useContext(authContext);
	const [errMsg, setErrMsg] = useState("");
	const navigate = useNavigate();

	const handleSignUp = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		const name = event.target.name.value;

		const img = event.target.image.files[0];
		const formData = new FormData();
		formData.append("image", img);

		const url = `https://api.imgbb.com/1/upload?key=${
			import.meta.env.VITE_IMGBB_KEY
		}`;

		if (password.length < 6) {
			setErrMsg("Password must be at least 6 character long !!! ");
		} else {
			setErrMsg("");
			handleNewUser(email, password)
				.then((result) => {
					fetch(url, {
						method: "POST",
						body: formData,
					})
						.then((res) => res.json())
						.then((data) => {
							const photo = data.data.display_url;
							handleUpdate(name, photo);
							signOut(auth);
							navigate("/login");
						});
				})
				.catch((error) => {
					setErrMsg(error.message);
				});
		}
  };
  

	return (
		<div className="flex h-[calc(100vh-300px)] p-10 flex-col items-center flex-grow justify-center">
			<div className="w-full max-w-xl">
				<form
					onSubmit={handleSignUp}
					className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4 space-y-5">
					<div>
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="name">
							Name
						</label>
						<input
							className=" border rounded w-full px-3 py-2 text-gray-700"
							id="name"
							type="text"
							placeholder="John Doe"
							// required
						/>
					</div>
					<div className="flex justify-between items-center">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="photo">
							Photo
						</label>
						<input
							type="file"
							id="photo"
							name="image"
							accept="image/*"
						/>
					</div>

					<div>
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="email">
							Email
						</label>
						<input
							className=" border rounded w-full px-3 py-2 text-gray-700"
							id="email"
							type="email"
							placeholder="Email"
							// required
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="password">
							Password
						</label>
						<input
							className=" border rounded w-full px-3 py-2 text-gray-700"
							id="password"
							type="password"
							placeholder="Password"
							// required
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
