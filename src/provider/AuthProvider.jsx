import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext({});

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	const GoogleProvider = new GoogleAuthProvider();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			setUser(loggedUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		loginUser,
		logout,
		loading,
		GoogleProvider,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
