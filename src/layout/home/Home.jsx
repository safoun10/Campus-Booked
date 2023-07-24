import React from "react";
import "./Home.css";
import TopNav from "../../components/topnav/TopNav";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Tilt } from "react-tilt";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Search from "../../components/search/Search";
import Three from "../../components/three/Three";
import Parallax from "../../components/parallax/Parallax";

const defaultOptions = {
	reverse: false, // reverse the tilt direction
	max: 15, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1, // 2 = 200%, 1.5 = 150%, etc..
	speed: 1000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Home = () => {
	return (
		<div>
			<section className="banner">
				<TopNav></TopNav>
				<div className="d-flex px-5 align-items-center">
					<div>
						<div className="banner-text">
							Dream Big, <br /> Explore Bigger! <br /> Book Your
							College Experience with Us!
						</div>
						<Link className="text-decoration-none">
							<div className="explore d-flex align-items-center gap-3">
								<span>Explore Our Colleges </span>
								<span>
									<BsArrowRight className="fs-4"></BsArrowRight>
								</span>
							</div>
						</Link>
					</div>
					<div className="banner-card me-5 mt-3 d-flex flex-column justify-content-center align-items-center">
						<Tilt
							options={defaultOptions}
							style={{ height: 380, width: 400 }}
						>
							<div className="d-flex flex-column justify-content-center p-5 align-items-center">
								<div>
									<Player
										autoplay
										loop
										src="https://lottie.host/05dfdb83-e32b-4a37-82ca-18f50acd9550/dzqMt2iI4V.json"
										style={{
											height: "250px",
											width: "420px",
										}}
									></Player>
								</div>
								<div className="fs-4 text-center fw-bold text-two">
									Fire Up Your College Adventure 😃
								</div>
							</div>
						</Tilt>
						<div className="btn w-100 bg-admit mt-4">
							<Link className="text-decoration-none text-white">
								Admit Now !
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Search></Search>
			<Three></Three>
			<Parallax></Parallax>
		</div>
	);
};

export default Home;
