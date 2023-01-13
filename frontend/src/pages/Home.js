import React from "react";
// import Catalogue from "./Catalogue";
import { useNavigate } from "react-router-dom";
import "../index.css";
import girl from "../assets/flyer-girl.png";
import boy from "../assets/flyer-boy.png";
//right now catalogue is a component in home and a stand-alone page..need to decide

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='parent flex justify-between'>
            <div className='left'>
                <h1 className='hero-text w-full text-center text-4xl p-3 h-24 mt-[100px] mb-[50px]'>
                    Free your Books. Be a BookBandit.
                </h1>

                <button
                    onClick={() => navigate("/catalogue")}
                    className='m-3  bg-white bg-opacity-60 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                    Browse
                </button>

                <button
                    onClick={() => navigate("/signup")}
                    className='m-3 bg-white bg-opacity-60 inline-block px-6 py-2 border-2 border-white-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[35%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                    Sign up
                </button>
                <img src={girl} alt='illustration-girl' className="w-[400px] mt-4" />
            </div>
            <div className='right'>
                <div className='illustrations'>
                
                    <img src={boy} alt='illustration-boy' className="w-[500px] hidden lg:inline ml-4" />
                </div>
            </div>
            {/* <div className='home search flex justify-center '>
               {/* <Catalogue /> */}
            {/* </div> */}
        </div>
    );
};

export default Home;
