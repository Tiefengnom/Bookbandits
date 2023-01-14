import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import { useUBContext } from "../hooks/useUBContext";
import { Link } from "react-router-dom"; 
 

const AccountLanding = () => {
    const { user } = useUserContext();
    const {bBooks, setbBooks} = useUBContext()
    const navigate = useNavigate();
    
    

    return (
        <div className=' header w-full h-full bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4  mt-10 '>
            {user && <div>Welcome, {user.first_name}!</div>}
                <div>
                    {" "}
                    <button onClick={ console.log(bBooks)}>click</button>
                    <div>
                        <p>Books from you which are currently borrowed</p>
                        {bBooks.map((b) => (
                            <>
                            <div>{b.title}</div>
                            <div>Rented until {b.btime}</div>
                            
                                                    {" "}
                                                    <button  onClick={() => navigate(`/catalogue/${b.book_id}`)} className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                                                        More Info
                                                    </button>
                                                
                            </>
                        ))}

                    </div>
                    <p>Books which you currently burrowed from others</p>
                    <button
                        onClick={() => navigate(`/${user._id}/user_collection`)}
                        className='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                        See all my books
                    </button>
                    <button
                        onClick={() => navigate(`/${user._id}/create_book`)}
                        class='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                        {" "}
                        Add Book
                    </button>{" "}
                </div>
            

            <Outlet />
        </div>
    );
};

export default AccountLanding;
