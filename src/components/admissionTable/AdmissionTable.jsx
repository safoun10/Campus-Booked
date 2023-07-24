/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const AdmissionTable = ({ colleges }) => {
	return (
		<>
			<tr>
				<th className="px-5 mx-5" colSpan={2}>
					{colleges.name}
				</th>
                
				<td colSpan={2}>
					{colleges.admissionDates[0]} to
					{colleges.admissionDates[0]}
				</td>

				<td>
					<Link className="text-decoration-none">
						<div className="btn btn-outline-secondary">Admission</div>
					</Link>
				</td>
			</tr>
		</>
	);
};

export default AdmissionTable;
