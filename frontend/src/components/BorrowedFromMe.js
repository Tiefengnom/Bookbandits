import React from "react";
import { useNavigate } from "react-router";


function BorrowedFromMe({books, approve, reject}) {
   const navigate = useNavigate()
    return (
        <div>
            <p>Books borrowed from me</p>
            {books.map((b) => (
                <div key={b._id}>
                    <div>{b.title}</div>
                    {!b.pending && b.borrowed ? (
                        <>
                            <button>
                                There is Interest in {b.title}!Do you want to rent this book to {b.borrower}?{" "}
                            </button>
                            <button onClick={approve(b._id)}>Yes</button>
                            <button onClick={reject(b._id)}>No</button>
                        </>
                    ) : (
                        <>
                            <div>Rented until {b.btime}</div>
                            <div>Rented by {b.borrower}</div>{" "}
                            <button
                                onClick={() => navigate(`/catalogue/${b.book_id}`)}
                                className=' bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                                More Info
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}


export default BorrowedFromMe;
