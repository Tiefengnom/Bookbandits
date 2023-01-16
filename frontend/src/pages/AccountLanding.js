import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import { useUBContext } from "../hooks/useUBContext";
import { Link,NavLink } from "react-router-dom"; 
 

const AccountLanding = () => {
    const { user } = useUserContext();
    const {bBooks, setbBooks} = useUBContext()
    const navigate = useNavigate();
    const rentbooks = user.rbooks
    const bbooks = user.bbooks

    const lentBook = async (b) => {
        const response = await fetch("http://localhost:4000/bookbandits/lentbook", {
            method: "POST",
            body: JSON.stringify({bid :b}),
            headers: {
                "Content-Type": "application/json",
            },
        });


    }

    const nolentBook = async (b) => {
        const response = await fetch("http://localhost:4000/bookbandits/deniedbook", {
            method: "POST",
            body: JSON.stringify({borrowed: false, bid : b}),
            headers: {
                "Content-Type": "application/json",
            },
        });


    }
    

    return (
        <div className=' header w-full h-full bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4  mt-10 '>
            {user && <div>Welcome, {user.first_name}!</div>}
                <div>
                    {" "}
                    <button onClick={ console.log(user)}>click</button>
                    <div>
                        <p>Books from you which are currently borrowed</p>
                        {bbooks.map((b) => (
                            <div key={b._id}>
                            <div>{b.title}</div>
                            {!b.pending && b.borrowed ? <><button >There is Interest in {b.title}!Do you want to rent this book to {b.borrower}? </button>
                            <button onClick={lentBook(b._id)}>Yes</button><button onClick={nolentBook(b._id)}>No</button>
                            </> :
                            <><div>Rented until {b.btime}</div>
                            <div>Rented by {b.borrower}</div>
                                                    {" "}
                                                    <button  onClick={() => navigate(`/catalogue/${b.book_id}`)} className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                                                        More Info
                                                    </button></>}
                                                
                            </div>
                        ))}

                    </div>
                    <p>Books which you currently burrowed from others</p>
                    {rentbooks.map((b) => (
                            <div key={b._id}>
                            <div>{b.title}</div>
                            <div>Rented until {b.btime}</div>
                            <div>Owner: {b.owner}</div>
                                                    {" "}
                                                    <button  onClick={() => navigate(`/catalogue/${b.book_id}`)} className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                                                        More Info
                                                    </button>
                                                
                            </div>
                        ))}

                        <button
                        onClick={() => navigate(`/${user._id}/user_collection`)}
                        className='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                        See all my books
                    </button>
                                    <button
                        onClick={() => navigate(`/${user._id}/create_book`)}
                        className='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                        {" "}
                        Add Book
                    </button>{" "}
                </div>
            

            <Outlet />
        </div>
    );
};

export default AccountLanding;
