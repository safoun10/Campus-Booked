import React from 'react';
import { Link } from 'react-router-dom';

const Research = () => {
    return (
		<div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
			<div className="text-center pt-5">
				<div className="display-5 fw-bold">
					Showcasing Our Brightest Minds
				</div>
				<div className="text-secondary">
					Outstanding Student Research Achievements
				</div>
			</div>

			<div className="row pt-5">
				<div className="col-11 col-md-6 mx-auto mb-3">
					<div className="rounded-4 border-2 card p-4">
						<img
							src="https://i.postimg.cc/T1XTXFq3/istockphoto-1496540890-612x612.jpg"
							alt="img"
							className="img-fluid rounded-4"
						/>
						<hr />
						<div className="text-two">
							AI in Medical Imaging for Early Disease Detection
						</div>
						<hr />
						<div className="text-secondary">
							Applying AI to medical images to improve early
							detection of diseases, enhancing patient outcomes
							and treatment strategies.
						</div>
						<Link
							to={"https://arxiv.org/pdf/1406.2661.pdf"}
							target="_blank"
							className="text-decoration-none btn w-100 border-3 btn-outline-secondary mt-4 rounded-4"
						>
							See more
						</Link>
					</div>
				</div>
				<div className="col-11 col-md-6 mx-auto mb-3">
					<div className="rounded-4 border-2 card p-4">
						<img
							src="https://i.postimg.cc/T1XTXFq3/istockphoto-1496540890-612x612.jpg"
							alt="img"
							className="img-fluid rounded-4"
						/>
						<hr />
						<div className="text-two">
							Blockchain Technology for Enhancing Healthcare Data
							Security
						</div>
						<hr />
						<div className="text-secondary">
							Exploring blockchain&apos;s potential in healthcare
							for secure data sharing, privacy, and trust in
							patient records and health information.
						</div>
						<Link
							to={"https://arxiv.org/pdf/1406.2661.pdf"}
							target="_blank"
							className="text-decoration-none btn w-100 border-3 btn-outline-secondary mt-4 rounded-4"
						>
							See more
						</Link>
					</div>
				</div>
				<div className="col-11 col-md-6 mx-auto mb-3">
					<div className="rounded-4 border-2 card p-4">
						<img
							src="https://i.postimg.cc/T1XTXFq3/istockphoto-1496540890-612x612.jpg"
							alt="img"
							className="img-fluid rounded-4"
						/>
						<hr />
						<div className="text-two">
							AI-Driven Mental Health Support through Chatbots
						</div>
						<hr />
						<div className="text-secondary">
							Utilizing AI-powered chatbots for accessible mental
							health support, providing timely interventions and
							personalized assistance to individuals.
						</div>
						<Link
							to={"https://arxiv.org/pdf/1406.2661.pdf"}
							target="_blank"
							className="text-decoration-none btn w-100 border-3 btn-outline-secondary mt-4 rounded-4"
						>
							See more
						</Link>
					</div>
				</div>
				<div className="col-11 col-md-6 mx-auto mb-3">
					<div className="rounded-4 border-2 card p-4">
						<img
							src="https://i.postimg.cc/T1XTXFq3/istockphoto-1496540890-612x612.jpg"
							alt="img"
							className="img-fluid rounded-4"
						/>
						<hr />
						<div className="text-two">
							Blockchain Applications for Ensuring Medical Supply
							Chain Integrity
						</div>
						<hr />
						<div className="text-secondary">
							Integrating blockchain in the medical supply chain
							to verify authenticity, track medicines, and prevent
							counterfeit products from entering circulation.
						</div>
						<Link
							to={"https://arxiv.org/pdf/1406.2661.pdf"}
							target="_blank"
							className="text-decoration-none btn w-100 border-3 btn-outline-secondary mt-4 rounded-4"
						>
							See more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Research;