import React from "react";
// import Catalogue from "./Catalogue";
import { useNavigate } from "react-router-dom";
import "../index.css";
//right now catalogue is a component in home and a stand-alone page..need to decide

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='header h-full w-full bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4 text-white'>
            <h1 className='hero-text w-full text-center text-4xl p-3 h-24 mt-[100px] mb-[50px]'>
                Free your Books. Be a BookBandit.
            </h1>

            <button
                onClick={() => navigate("/login")}
                className='m-3 inline-block px-6 py-2 border-2 border-white-500 text-white-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                Login
            </button>

            <button
                onClick={() => navigate("/signup")}
                className='m-3 inline-block px-6 py-2 border-2 border-white-500 text-white-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                Sign up
            </button>
            <div className='home search flex justify-center '>
               {/* <Catalogue /> */}
            </div>
        </div>
    );
};

export default Home;
