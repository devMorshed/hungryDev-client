import React, { Children, createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
export const authContext = createContext(null);

import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signInWithPopup,
	GithubAuthProvider,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	const gitProvider = new GithubAuthProvider();

	const handleGit = () => {
		signInWithPopup(auth, gitProvider)
			.then((result) => {
				// This gives you a GitHub Access Token. You can use it to access the GitHub API.
				const credential =
					GithubAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				console.log(user);
			})

			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential =
					GithubAuthProvider.credentialFromError(error);
				console.log(error);
			});
	};

	const handleGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;

				console.log("user ", user);
				console.log("credential ", credential);
				console.log("token ", token);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential =
					GoogleAuthProvider.credentialFromError(error);

				console.log("credential ", credential);
				console.log("errorCode ", errorCode);
				console.log("errorMessage ", errorMessage);
				console.log("email ", email);
			});
	};

	const handleNewUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);

			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);

				// ..
			});
	};

	const handleSignIn = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				
				
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
			});
  };
  
  const handleUpdate = (name, photo) => {
		updateProfile(auth.currentUser, {
      displayName: name,
			photoURL: photo ,
		})
			.then(() => {
				// Profile updated!
				// ...
        console.log("updated", name, photo);
			})
			.catch((error) => {
				// An error occurred
				// ...
        console.log(error);
			});
  };

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				console.log("Auth Status Changed");
				console.log(user);
				setUser(user);
				setLoading(false);
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	}, []);

	const authInfo = {
		loading,
		user,
		handleGoogle,
		handleNewUser,
		handleSignIn,
		handleGit,
		handleUpdate,
	};

	return (
		<authContext.Provider value={authInfo}>{children}</authContext.Provider>
	);
};

export default AuthProvider;
