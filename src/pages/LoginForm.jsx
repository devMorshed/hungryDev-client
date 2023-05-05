import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authContext } from "../Provider/AuthProvider";
import useTitle from "../hooks/useTitle";
import { FiSun, FiMoon } from "react-icons/fi";


function LoginForm() {
  useTitle("Login");


	const [dark, setDark] = useState(true);

  const [errMsg, setErrMsg] = useState("");
  
	const navigate = useNavigate();
  const location = useLocation();
  
	const redirectPath = location.state?.from?.pathname || "/";

	const { handleGit, handleGoogle, handleSignIn } = useContext(authContext);

	const handleLogIn = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		handleSignIn(email, password)
			.then(() => {
				event.target.reset();
				navigate(redirectPath);
			})
			.catch((error) => {
				setErrMsg(error.message);
			});
	};

	const providerLoginHandler = (prov) => {
		prov()
			.then((result) => {
				navigate(redirectPath);
			})
			.catch((error) => {
				setErrMsg(error.message);
			});
  };

  	const toggledark = (dark) => {
		setDark((dark) => !dark);
	};
  

	return (
    <div className={`flex h-[calc(100vh-164px)] md:p-10 py-16 flex-grow flex-col items-center justify-center ${dark ? 'bg-gray-800 ' : 'bg-gray-300'}`}>
			{/* <div className="w-full max-w-xl"> */}
			<div
				className={` w-full max-w-xl p-4 rounded-xl md:p-10 ${
					dark ? "bg-gray-400" : 'bg-white'
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
				<form
					onSubmit={handleLogIn}
					className={`shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4 ${
						dark ? "bg-gray-800 text-gray-100" : "text-gray-700"
					}`}>
					<div className="mb-4">
						<label
							className="block  font-bold mb-2"
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
							className="block font-bold mb-2"
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
					{errMsg && (
						<div className="my-4 text-center text-warning rounded-md">
							{errMsg}
						</div>
					)}
					<div className="mt-4">
						<button
							className="bg-orange-400   hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full "
							type="submit">
							Log in
						</button>
					</div>
				</form>
				<div className="flex my-4 py-3  md:gap-4 ">
					<button
						onClick={() => {
							providerLoginHandler(handleGoogle);
						}}
						className="mx-auto block glass hover:bg-orange-500 btn btn-outline rounded">
						<p className="flex gap-3 items-center">
							Log In using <FcGoogle size={30} />
						</p>
					</button>
					<button
						onClick={() => {
							providerLoginHandler(handleGit);
						}}
						className=" mx-auto block glass hover:bg-orange-500 btn btn-outline rounded">
						<p className="flex gap-3 items-center">
							Log In using <FaGithub size={30} />
						</p>
					</button>
				</div>
				<div className="flex justify-center gap-4 items-center">
					<p>Not a user?</p>
					<Link to={"/register"}>
						<button className="btn btn-outline btn-md rounded ">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
