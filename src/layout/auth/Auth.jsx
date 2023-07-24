import React from "react";
import "./Auth.css";
import { Outlet } from "react-router-dom";
import TopNav from "../../components/topnav/TopNav";
import { Player } from "@lottiefiles/react-lottie-player";

const Auth = () => {
	return (
		<div className="auth">
			<TopNav></TopNav>
			<div className="row mx-auto align-items-center" style={{ maxWidth: "1200px" }}>
				<div className="col-11 col-md-6 mx-auto">
					<Player
						autoplay
						loop
						src="https://lottie.host/a7dfa3c7-e0c2-47e0-bba2-420b210f08ab/lhZRjsnWy4.json"
						style={{
							height: "100%",
							width: "100%",
						}}
					></Player>
				</div>
				<div className="col-11 col-md-6 mx-auto">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Auth;
