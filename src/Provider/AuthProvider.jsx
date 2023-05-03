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
	signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
	const [errMsg, setErrMsg] = useState("");
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
				// console.log(user);
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
		return signInWithPopup(auth, googleProvider)
	};

	const handleNewUser = (email, password, path) => {
		 return createUserWithEmailAndPassword(auth, email, password)
			
	};

	const handleSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
			
	};

	const handleUpdate = (name, photo) => {
		updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		})
			.then(() => {
				// Profile updated!
				// ...
				// console.log("updated", name, photo);
			})
			.catch((error) => {
				// An error occurred
				// ...
				// console.log(error);
			});
  };
  
  const handleSignOut = () => {
    signOut(auth)
		.then(() => {
			console.log("Sign-out successful.");
		})
		.catch((error) => {
			// An error happened.
      console.log("sign out error");
      console.log(error);
		});
  }

	 useEffect(() => {
			const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
				console.log("auth state change", currentUser);
				setUser(currentUser);
				setLoading(false);
			});

			return () => {
				unsubscribe();
			};
		}, []);

	const authInfo = {
		loading,
		user,
		handleGoogle,
		handleNewUser,
		handleSignIn,
		handleGit,
		handleUpdate,
		errMsg,
		handleSignOut,
		auth,
	};

	return (
		<authContext.Provider value={authInfo}>{children}</authContext.Provider>
	);
};

export default AuthProvider;
