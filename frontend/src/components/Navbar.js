import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import logo from "../assets/logo-orange.png";
import cross from "../assets/cross.png";
import menu from "../assets/hamburger.png";

const Navbar = () => {
    const navigate = useNavigate();
    //remember to add active class to navbar in css
    const { user } = useUserContext();
    let [visibility, setMenuVisibility] = useState(false);

    return (
        <header className='header'>
            <div className='header flex w-screen justify-between p-4 fixed top-0 left-0 right-0 bg-white z-[99]'>
                <button onClick={() => navigate("/")}>
                    <div className='flex justify-center align-center'>
                        <img className='w-12 h-15' src={logo} alt='reading racoon' />
                        <h1 className='m-[5px] text-xl font-medium text-gray-400'>BookBandits</h1>
                    </div>
                </button>
                <div
                    onClick={() => setMenuVisibility(!visibility)}
                    className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <div>
                        {" "}
                        <img className='w-6 mt-[-5px]' src={visibility ? cross : menu} alt='icon' />
                    </div>
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-1 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
                        visibility ? "top-12 " : "top-[-490px]"
                    }`}>
                    <li
                        onClick={() => navigate("/")}
                        className='text-center mx-auto px-4 text-gray-400 border-b-2 border-transparent hover:border-pink-500 w-fit cursor-pointer'>
                        {" "}
                        Home
                    </li>

                    <li
                        onClick={() => navigate("/catalogue")}
                        className='text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500 cursor-pointer'>
                        {" "}
                        Catalogue
                    </li>

                    {!user ? (
                        <li></li>
                    ) : (
                        <li
                            onClick={() => navigate(`/${user._id}`)}
                            className='text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500 cursor-pointer'>
                            Account
                        </li>
                    )}
                    {!user ? (
                        <li></li>
                    ) : (
                        <li
                            onClick={() => navigate(`/${user._id}/create_book`)}
                            className='text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500 cursor-pointer'>
                            Add Book
                        </li>
                    )}
                    {!user ? (
                        <li></li>
                    ) : (
                        <li
                            onClick={() => navigate(`/${user._id}/user_collection`)}
                            className='text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500 cursor-pointer'>
                            My Books
                        </li>
                    )}

                    {user ? (
                        <li
                            onClick={() => navigate("/logout")}
                            className='text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500 cursor-pointer'>
                            Logout
                        </li>
                    ) : (
                        <li
                            onClick={() => navigate("/login")}
                            className='text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500 cursor-pointer'>
                            Login
                        </li>
                    )}
                    {user ? (
                        <li></li>
                    ) : (
                        <li
                            onClick={() => navigate("/signup")}
                            className='text-center mx-auto px-4 w-fit text-gray-400 border-b-2 border-transparent hover:border-pink-500 cursor-pointer'>
                            Sign Up
                        </li>
                    )}
                </ul>
                {/* <button onClick={()=>navigate(-1)} className="text-center text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500 hidden md-flex">Back</button> */}
            </div>
        </header>
    );
};

export default Navbar;
