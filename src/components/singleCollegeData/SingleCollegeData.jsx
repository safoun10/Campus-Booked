import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCollegeData = () => {
	const ID = useParams();

	const [info, setInfo] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://campus-booked-server.vercel.app/colleges")
			.then((res) => res.json())
			.then((data) => setInfo(data));
	}, []);

	useEffect(() => {
		const selectCollege = info.find((college) => college._id === ID.ID);
		setData(selectCollege);
	}, [ID.ID, info]);

	return (
		<div>
			<div>{data?.name}</div>
		</div>
	);
};

export default SingleCollegeData;
