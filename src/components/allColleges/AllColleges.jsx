import React, { useEffect, useState } from "react";
import SingleCollege from "../singleCollege/SingleCollege";

const AllColleges = () => {
	const [colleges, setColleges] = useState([]);

	useEffect(() => {
		fetch("colleges.json")
			.then((res) => res.json())
			.then((data) => setColleges(data));
	}, []);

	return (
		<div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
			<div className="display-5 fw-bold">
				Here is the list of our esteemed Colleges
			</div>
			<div className="text-secondary">Quality At it&apos;s peak !!</div>

			<div>
				<div className="row">
					{colleges?.map((college) => (
						<SingleCollege
							key={college.college_id}
							college={college}
						>
							{college?.college_id}
						</SingleCollege>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllColleges;
