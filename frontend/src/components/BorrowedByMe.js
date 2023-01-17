import React from "react";
import { useNavigate } from "react-router";

function BorrowedByMe({books}) {
    const navigate = useNavigate();
    return (
        <div>
            <p className="font-bold text-2xl">Books borrowed by me</p>
            {books.map((b) => (
                <div key={b._id} className="bg-white w-full p-5 shadow-lg rounded border-b-[4px] border-transparent hover:border-pink-500 text-gray-700 text-center mt-4">
                    <div>{b.title}</div>
                   
                    <div>Borrowed until {b.btime.toLocaleString("ia", { dateStyle: "short" })}</div>
                    <div>Owner: {b.owner}</div>{" "}
                    <button
                        onClick={() => navigate(`/catalogue/${b.book_id}`)}
                        className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                        More Info
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BorrowedByMe;
