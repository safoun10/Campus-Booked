import React, { useEffect, useState } from "react";
import "./Parallax.css";
import SinglePara from "../singlePara/singlePara";

const Parallax = () => {
	const [colleges, setColleges] = useState([]);

	useEffect(() => {
		fetch("https://campus-booked-server.vercel.app/colleges")
			.then((res) => res.json())
			.then((data) => setColleges(data));
	}, []);

	return (
		<div className="mx-auto pt-5 my-5" style={{ maxWidth: "1200px" }}>
			<div className="text-center display-6 text-two pb-5">
				An investment in{" "}
				<span className="bg-warning px-2">knowledge</span> always pays
				the best interest
			</div>
			<div>
				{colleges?.map((college) => (
					<SinglePara
						key={college.college_id}
						college={college}
					></SinglePara>
				))}
			</div>
			<div className="text-center display-6 text-two pb-5">
				Happy students radiate like sunflowers, thriving in the warmth
				of <span className="bg-warning px-2 text-white">knowledge</span>
				, blossoming with curiosity, and spreading joy with every step
				they take💖
			</div>
			<hr />
		</div>
	);
};

export default Parallax;
