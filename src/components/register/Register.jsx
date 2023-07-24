import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const name = form.text.value;
		const photo = form.url.value;
		const email = form.email.value;
		const password = form.pass.value;

		if (password.length < 6) {
			toast("Your Password is too weak ! Feed it more !");
			return;
		} else {
			console.log(email, password, name, photo);
		}
	};

	return (
		<div>
			<div className="display-6 text-two text-center pb-5">
				Register Your Account
			</div>
			<form
				onSubmit={handleSubmit}
				className="d-flex flex-column gap-3 mb-4"
			>
				<div>
					<input
						placeholder="Your Name"
						className="input-login"
						name="text"
						type="text"
						required
					/>
				</div>
				<div>
					<input
						placeholder="Your Email"
						className="input-login"
						name="email"
						type="email"
						required
					/>
				</div>
				<div>
					<input
						placeholder="Your Photo"
						className="input-login"
						name="url"
						type="url"
						required
					/>
				</div>
				<div>
					<input
						placeholder="Your Password"
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
						value="Register!"
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
			<div className="text-end mt-4 mb-2">
				Already have an account ? <Link to={"/login"}>Login Here</Link>
			</div>
		</div>
	);
};

export default Register;
