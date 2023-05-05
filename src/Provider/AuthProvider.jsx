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
	updateEmail,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
	const [errMsg, setErrMsg] = useState("");
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	const gitProvider = new GithubAuthProvider();

	const handleGit = () => {
		return signInWithPopup(auth, gitProvider);
	};

	const handleGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const handleNewUser = (email, password, path) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const handleSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const handleUpdate = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	const handleEmailUpdate = (newEmail) => {
		const emailToUpdate = newEmail;
		updateEmail(auth.currentUser, emailToUpdate);
	};

	const handleSignOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
		handleEmailUpdate,
	};

	return (
		<authContext.Provider value={authInfo}>{children}</authContext.Provider>
	);
};

export default AuthProvider;
