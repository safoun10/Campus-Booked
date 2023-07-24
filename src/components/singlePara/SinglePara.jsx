import React from 'react';

const SinglePara = (college) => {
    const data = college.college;
    return (
		<div>
			<div>
				<div
					style={{ backgroundImage: `url(${data.details.gallery[0]})` }}
					className="para d-flex justify-content-center align-items-center"
				>
					<div className="text-white display-6 text-center text-two w-50">
						{data.name}
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default SinglePara;