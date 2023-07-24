import React from "react";
import TopNav from "../../components/topnav/TopNav";
import "./Colleges.css";
import AllColleges from "../../components/allColleges/AllColleges";

const Colleges = () => {
	return (
		<div>
			<section className="college-banner">
				<TopNav></TopNav>
				<div className="d-flex justify-content-center align-items-center">
					<div className="text-two bg-white display-3 w-75 text-center college-banner-text">
						Your Path to Higher Education <br />{" "}
						<span className="display-6 text-secondary">
							Discovering College Opportunities
						</span>
					</div>
				</div>
			</section>
			<AllColleges></AllColleges>
		</div>
	);
};

export default Colleges;
