import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

const AccountLanding = () => {
	const {userID} = useUserContext();
	const navigate = useNavigate();

	return (
		<div>
			<div>Username: {userID}</div>
			<button onClick={() => navigate("user_collection")}>See all my books</button>

			<button onClick={() => navigate("create_book")}> Add Book</button>
			<Outlet />
		</div>
	);
}

export default AccountLanding;
