import React from "react";
import "./Login.css";
import { Player } from "@lottiefiles/react-lottie-player";

const Login = () => {
	return (
		<div>
			<div className="display-6 text-two text-center pb-5">
				Login Your Account
			</div>
			<form className="d-flex flex-column gap-3 mb-4">
				<div>
					<input className="input-login" type="email" required />
				</div>
				<div>
					<input className="input-login" type="password" required />
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
					<span className="social">
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
		</div>
	);
};

export default Login;
