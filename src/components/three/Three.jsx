import React, { useEffect, useState } from "react";
import SingleCollegeHome from "../singleCollegeHome/SingleCollegeHome";

const Three = () => {
	const [colleges, setColleges] = useState([]);

	useEffect(() => {
		fetch("https://campus-booked-server.vercel.app/colleges")
			.then((res) => res.json())
			.then((data) => {
				const useable_data = data.slice(0, 4);
				setColleges(useable_data);
			});
	}, []);

	return (
		<div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
			<div className="py-4">
				<div className="display-4 fw-bold text-center">
					Having a tough time choosing?
				</div>
				<div className="fs-5 text-secondary text-center pt-3">
					So many great options 😯🫢! Discover Your Options - Explore a
					Variety of Choices!
				</div>
			</div>
			<div className="row">
				{colleges?.map((college) => (
					<SingleCollegeHome
						key={college.college_id}
						college={college}
					>
						{college?.college_id}
					</SingleCollegeHome>
				))}
			</div>
		</div>
	);
};

export default Three;
