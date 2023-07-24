import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SingleCollege = (college) => {
	const data = college.college;

	const { _id , college_id, name, admissionDates, researchHistory, image } = data;

	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch("https://campus-booked-server.vercel.app/review")
			.then((res) => res.json())
			.then((data) => {
				const real_data = data.filter(
					(single) => single?.college_id === college_id
				);
				setReviews(real_data);
			});
	}, [college_id]);

	const review_num = reviews?.reduce(
		(sum, obj) => sum + parseInt(obj?.rating),
		0
	);
	const review_length = reviews?.length;
	const avg_review = parseInt(review_num / review_length);

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
				<div className="box-text-card">
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
					<div>
						<div className="fw-bold">
							Research History : {researchHistory}
						</div>
					</div>
					<div>Rating : {avg_review}</div>
				</div>
				<div>
					<Link
						to={`/colleges/${_id}`}
						className="text-decoration-none btn w-100 details"
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleCollege;
