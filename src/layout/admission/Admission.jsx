import React, { useEffect, useState } from "react";
import "./Admission.css";
import TopNav from "../../components/topnav/TopNav";
import AdmissionTable from "../../components/admissionTable/AdmissionTable";

const Admission = () => {
	const [colleges, setColleges] = useState([]);

	useEffect(() => {
		fetch("https://campus-booked-server.vercel.app/colleges")
			.then((res) => res.json())
			.then((data) => setColleges(data));
	}, []);

	return (
		<div>
			<section className="admission-section">
				<TopNav></TopNav>
				<div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
					<table className="table table-striped table-hover mt-5">
						<thead>
							<tr className="table-dark">
								<th
									className="px-5 mx-5"
									colSpan={2}
									scope="col"
								>
									College Name
								</th>
								<th colSpan={2} scope="col">
									Admission Date
								</th>
								<th scope="col">Apply</th>
							</tr>
						</thead>
						<tbody>
							<>
								{colleges.map((colleges) => (
									<AdmissionTable
										key={colleges.id}
										colleges={colleges}
									></AdmissionTable>
								))}
							</>
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
};

export default Admission;
