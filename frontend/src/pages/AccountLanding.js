import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import { useUBContext } from "../hooks/useUBContext";
import { Link, NavLink } from "react-router-dom";

import BorrowedByMe from "../components/BorrowedByMe";
import BorrowedFromMe from "../components/BorrowedFromMe";

const AccountLanding = () => {
    const { user } = useUserContext();
    const { bBooks, setbBooks } = useUBContext();
    const navigate = useNavigate();
    const rentbooks = user.rbooks;
    const bbooks = user.bbooks;

    const [enabledBy, setEnabledBy] = useState(false);
    const [enabledFrom, setEnabledFrom] = useState(false);

    const lentBook = async (b) => {
        const response = await fetch("http://localhost:4000/bookbandits/lentbook", {
            method: "POST",
            body: JSON.stringify({ bid: b }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    const nolentBook = async (b) => {
        const response = await fetch("http://localhost:4000/bookbandits/deniedbook", {
            method: "POST",
            body: JSON.stringify({ borrowed: false, bid: b }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <div className=' header w-full h-full  pt-12 pb-12 px-4  mt-10 '>
            {user && (
                <>
                    {" "}
                    <div>Welcome, {user.first_name}!</div>
                    <button
                        onClick={() => navigate(`/${user._id}/user_collection`)}
                        className='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                        See all my books
                    </button>
                    <button
                        onClick={() => navigate(`/${user._id}/create_book`)}
                        className='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                        {" "}
                        Add Book
                    </button>
                    <Outlet />
                    <button
                        onClick={() => {
                            setEnabledBy(!enabledBy);
                        }}
                        className='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                       Borrowed by me
                    </button>
                 
                    <div className={!enabledBy && "hidden"}>
                        <BorrowedByMe books={bbooks} approve={lentBook} reject={nolentBook} />{" "}
                    </div>

                    <button
                        onClick={() => {
                            setEnabledFrom(!enabledFrom);
                        }}
                        className='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                       Borrowed from me
                    </button>
                    <div className={!enabledFrom && "hidden"}>
                    <BorrowedFromMe books={rentbooks} />{" "}
                    </div>
                </>
            )}
        </div>
    );
};

export default AccountLanding;
