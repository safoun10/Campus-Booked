import React from "react";
import "./SingleCollegeHome.css";
import { Link } from "react-router-dom";

const SingleCollegeHome = (college) => {
	const data = college.college;

	const {
		college_id,
		name,
		admissionDates,
		events,
		researchHistory,
		sports,
		image,
	} = data;

	return (
		<div className="col-11 col-md-6 mx-auto">
			<div className="college-card-home rounded-4 p-4">
				<div>
					<img
						className="img-fluid rounded-4"
						src={image}
						alt="img"
					/>
				</div>
				<hr />
				<div className="box-text">
					<div>
						<div className="text-two fs-3 text-secondary">
							{name}
						</div>
					</div>
					<hr />
					<div>
						Admission dates :{" "}
						<span className="fw-bold">{admissionDates[0]}</span> to{" "}
						<span className="fw-bold">{admissionDates[1]}</span>
					</div>
					<div className="d-flex align-items-center my-3 gap-2">
						<div>Events :</div>
						<div className="d-flex gap-3 flex-wrap">
							<span className="event">{events[0]}</span>
							<span className="event">{events[1]}</span>
						</div>
					</div>
					<div className="d-flex align-items-center my-3 gap-2">
						<div>Sports :</div>
						<div className="d-flex gap-3 flex-wrap">
							<span className="event">{sports[0]}</span>
							<span className="event">{sports[1]}</span>
							<span className="event">{sports[2]}</span>
						</div>
					</div>
					<div>
						<div className="fw-bold">
							Research History : <br />
						</div>
						<div className="text-secondary">{researchHistory}</div>
					</div>
				</div>
				<div>
					<Link className="text-decoration-none btn w-100 details">
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleCollegeHome;
