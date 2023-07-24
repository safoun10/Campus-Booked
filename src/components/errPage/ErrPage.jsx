import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrPage = () => {
    return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<Player
				autoplay
				loop
				src="https://lottie.host/93624b5e-fd24-475f-acea-9f07d1d32eb8/U5jTfEQwDR.json"
				style={{
					height: "500px",
					width: "500px",
				}}
			></Player>
            <Link to={"/"}>Go Back To Home</Link>
		</div>
	);
};

export default ErrPage;