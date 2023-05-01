import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const provider = new GithubAuthProvider();
function LoginForm() {
	const handleLogIn = (event) => {
		event.preventDefault();
		console.log(event);
  };
  
  const auth = getAuth(app);
  const gitProvide = new GithubAuthProvider();

  const handleGit = () => {
    signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a GitHub Access Token. You can use it to access the GitHub API.
			const credential = GithubAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;

			// The signed-in user info.
			const user = result.user;
			// IdP data available using getAdditionalUserInfo(result)
			// ...
      console.log(user);
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GithubAuthProvider.credentialFromError(error);
			// ...
      console.log(error);
		});
  }


	return (
		<div className="flex flex-col items-center justify-center h-[800px] bg-gray-100">
			<div className="w-full max-w-md">
				<form
					onSubmit={handleLogIn}
					className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
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
							className="bg-orange-400   hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full "
							type="submit">
							Log in
						</button>
					</div>
					<div className="flex">
						<button className="my-6 mx-auto block btn btn-outline rounded">
							<p className="flex gap-3 items-center">
								Log In using <FcGoogle size={30} />
							</p>
						</button>
						<button
							onClick={handleGit}
							className="my-6 mx-auto block btn btn-outline rounded">
							<p className="flex gap-3 items-center">
								Log In using <FaGithub size={30} />
							</p>
						</button>
					</div>
				</form>
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
