import React, { useContext } from "react";
import "./TopNav.css";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const TopNav = () => {
	const { user, logout } = useContext(AuthContext);
	const location = useLocation();
	const pathName = location.pathname;

	const signOut = () => {
		logout();
		toast("Signed Out !");
	};

	return (
		<div className="d-flex justify-content-between align-items-center py-3 px-5 topnav">
			<div className="d-flex gap-3">
				<img
					className="logo"
					src="https://i.postimg.cc/CxvZVMRL/school.png"
					alt="logo"
				/>
				<div className="display-6 text-two">
					<span className="camp">CAMP</span>US
					<br /> BOOKED
				</div>
			</div>
			<div className="d-flex justify-content-between align-items-center gap-5">
				<div className="d-flex fs-4 gap-3 align-items-center">
					<Link
						to={"/"}
						className={
							pathName == "/home"
								? "text-decoration-none text-white text-shadow active"
								: "text-decoration-none text-white text-shadow"
						}
					>
						Home
					</Link>
					<Link
						to={"/colleges"}
						className={
							pathName == "/colleges"
								? "text-decoration-none text-white text-shadow active"
								: "text-decoration-none text-white text-shadow"
						}
					>
						Colleges
					</Link>
					<Link
						to={"/admission"}
						className={
							pathName == "/admission"
								? "text-decoration-none text-white text-shadow active"
								: "text-decoration-none text-white text-shadow"
						}
					>
						Admission
					</Link>
					<Link className="text-decoration-none text-white text-shadow">
						My College
					</Link>
				</div>
				<div>
					{user ? (
						<div className="d-flex gap-4">
							<div>
								<img
									referrerPolicy="no-referrer"
									className="img-fluid user-img"
									src={user?.photoURL}
									alt="img"
								/>
							</div>
							<div
								onClick={signOut}
								className="text-decoration-none btn bg-danger logout-btn"
							>
								Logout
							</div>
						</div>
					) : (
						<>
							<div>
								<Link
									to={"/login"}
									className="text-decoration-none btn login-btn"
								>
									Login
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default TopNav;
