import React, { useContext, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { FiSun, FiMoon } from "react-icons/fi";
import SpinnerSkeleton from "../components/SpinnerSkeleton";

const Profile = () => {
	useTitle("Profile");

	const { user, handleSignOut, loading, handleUpdate, handleEmailUpdate } =
		useContext(authContext);

	const [dark, setDark] = useState(true);
	const [update, setUpdate] = useState(false);
	const [errMsg, setErrMsg] = useState();

	const toggledark = (dark) => {
		setDark((dark) => !dark);
	};

	const signOutHandler = () => {
		handleSignOut();
	};

	const updateHandler = (event) => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const img = event.target.image.files[0];
		const formData = new FormData();
		formData.append("image", img);

		const url = `https://api.imgbb.com/1/upload?key=${
			import.meta.env.VITE_IMGBB_KEY
		}`;

		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				const photo = data.data.display_url;
				handleUpdate(name, photo);
			});

		if (user.email !== email) {
			handleEmailUpdate(email);
		}

		setTimeout(() => {
			setUpdate(false);
		}, 2000);
	};

	return (
		<div
			className={`flex h-[calc(100vh-164px)] justify-center items-center ${
				dark && "bg-gray-800"
			}`}>
			{loading ? (
				<SpinnerSkeleton />
			) : (
				<div
					className={`max-w-md w-full  p-6 rounded-lg shadow-lg ${
						dark ? "bg-zinc-400" : "bg-orange-300"
					}`}>
					<div className="flex justify-end mb-4">
						{dark ? (
							<FiMoon
								className="text-2xl cursor-pointer"
								onClick={toggledark}
							/>
						) : (
							<FiSun
								className="text-2xl cursor-pointer"
								onClick={toggledark}
							/>
						)}
					</div>

					<h2 className="text-2xl dark:text-4xl font-bold mb-6">
						{!update ? "Profile" : "Update Profile "}
					</h2>

					{user ? (
						<div className="flex flex-col items-center">
							<div className={`  ${update && "hidden"}`}>
								<img
									src={user.photoURL}
									alt="Profile"
									className="w-24 h-24 rounded-full mb-4"
								/>
								<p className="text-lg mb-2">
									Name: {user.displayName}
								</p>
								<p className="text-lg mb-4">
									Email: {user.email}
								</p>
								<div className="flex gap-3 justify-around">
									<button
										onClick={signOutHandler}
										className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
										Sign Out
									</button>
									<button
										onClick={() => {
											setUpdate(true);
										}}
										className=" hover:glass  bg-orange-400 text-white font-bold py-2 px-4 rounded">
										Update
									</button>
								</div>
							</div>

							<form
								onSubmit={updateHandler}
								className={`space-y-5 ${!update && "hidden"}`}>
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
										defaultValue={user.displayName}
									/>
								</div>
								<div>
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
										defaultValue={user.email}
									/>
								</div>

								{errMsg && (
									<div className="my-4 text-center text-warning rounded-md"></div>
								)}
								<div className="flex gap-3 justify-around">
									<button
										onClick={() => {
											setUpdate(false);
										}}
										className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
										Cancel
									</button>
									<button className="bg-red-500 hover:btn-success text-white font-bold py-2 px-4 rounded">
										Submit
									</button>
								</div>
							</form>
						</div>
					) : (
						<Navigate to={"/login"} />
					)}
				</div>
			)}
		</div>
	);
};

export default Profile;
