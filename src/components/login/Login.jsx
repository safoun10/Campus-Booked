import React, { useContext } from "react";
import "./Login.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";

const auth = getAuth();
const Login = () => {
	const { loginUser, GoogleProvider } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/home";

	const handleEmail = (e) => {
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.pass.value;

		if (password.length < 6) {
			toast("Your Password is too weak ! Feed it more !");
			return;
		} else {
			loginUser(email, password)
				.then((res) => {
					toast("Welcome Back !!");
					form.email.value = "";
					form.pass.value = "";
					navigate(from, { replace: true });
				})
				.catch((error) => {
					toast.error(error.message);
				});
		}
	};

    const handleGoogleSignIn = () => {
		signInWithPopup(auth, GoogleProvider)
			.then(() => {
				toast("You have successfully signed in with Google !!");
				navigate(from, { replace: true });
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	return (
		<div>
			<div className="display-6 text-two text-center pb-5">
				Login Your Account
			</div>
			<form
				onSubmit={handleEmail}
				className="d-flex flex-column gap-3 mb-4"
			>
				<div>
					<input
						placeholder="Your Email Here"
						className="input-login"
						name="email"
						type="email"
						required
					/>
				</div>
				<div>
					<input
						placeholder="Your Password Here"
						className="input-login"
						name="pass"
						type="password"
						required
					/>
				</div>
				<div>
					<input
						className="login-button"
						type="submit"
						value="Login!"
					/>
				</div>
			</form>
			<hr />
			<div className="mt-3">
				<div className="display-5 text-two d-flex align-items-center justify-content-between">
					Or you can try{" "}
					<span onClick={handleGoogleSignIn} className="social">
						<Player
							autoplay
							loop
							src="https://lottie.host/bd966d8b-5ab4-4460-addc-8df2da1f4739/TuS9D3GG8o.json"
							style={{
								height: "80px",
								width: "80px",
							}}
						></Player>
					</span>{" "}
					<span className="social">
						<Player
							autoplay
							loop
							src="https://lottie.host/f06b5654-428d-4fda-a30c-19ab65bb735a/7yfrkFxiSn.json"
							style={{
								height: "80px",
								width: "80px",
							}}
						></Player>
					</span>{" "}
				</div>
			</div>
			<div className="text-end mt-4">
				Don&apos;t have an account ?{" "}
				<Link to={"/register"}>Register Here</Link>
			</div>
		</div>
	);
};

export default Login;
