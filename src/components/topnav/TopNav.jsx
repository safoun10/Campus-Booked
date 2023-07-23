import React from "react";
import "./TopNav.css"
import { Link } from "react-router-dom";

const TopNav = () => {
	return (
		<div className="d-flex justify-content-between align-items-center py-3 px-5 topnav">
			<div className="d-flex gap-3">
				<img
					className="logo"
					src="https://i.postimg.cc/CxvZVMRL/school.png"
					alt="logo"
				/>
				<div className="display-6 text-two">
					<span className="camp">CAMP</span>US
					<br /> BOOKED
				</div>
			</div>
			<div className="d-flex justify-content-between align-items-center gap-5">
				<div className="d-flex fs-4 gap-3 align-items-center">
					<Link className="text-decoration-none text-white active">
						Home
					</Link>
					<Link className="text-decoration-none text-white">
						Colleges
					</Link>
					<Link className="text-decoration-none text-white">
						Admission
					</Link>
					<Link className="text-decoration-none text-white">
						My College
					</Link>
				</div>
				<div>
					<Link className="text-decoration-none btn login-btn">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
