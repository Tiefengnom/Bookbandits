import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

const AccountLanding = () => {
	const {user} = useUserContext();
	const navigate = useNavigate();

	return (
		<div className=" header w-full h-screen bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4 text-white ">
			{user &&  <div>Welcome, {user.first_name}!</div>}
			<button onClick={() => navigate("user_collection")} class="mr-4 inline-block px-6 py-2 border-2 border-white-500 text-white-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out">See all my books</button>

			<button onClick={() => navigate("create_book")} class="mr-4 inline-block px-6 py-2 border-2 border-white-500 text-white-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"> Add Book</button>
			<Outlet />
		</div>
	);
}

export default AccountLanding;
