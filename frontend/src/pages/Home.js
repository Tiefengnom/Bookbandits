import React from "react";
// import Catalogue from "./Catalogue";
import { useNavigate } from "react-router-dom";
import "../index.css";
import girl from "../assets/flyer-girl.png";
import boy from "../assets/flyer-boy.png";
import Cards from "../components/Cards";
//right now catalogue is a component in home and a stand-alone page..need to decide

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap">
        <div className='parent flex justify-between w-4/5 m-auto h-full lg:pt-[100px] lg:pb-[200px]'>
        <img src={girl} alt='illustration-girl' className='w-[400px] h-[300px] mt-4' />
            <div className='left w-1/3'>
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
              
            </div>
            <div className='right w-1/3'>
                <div className='illustrations w-[500px]'>
                    <img src={boy} alt='illustration-boy' className='mt-[-100px] sm:hidden lg:inline ml-4' />
                </div>
            </div>
            </div>
            {/* <div className='home search flex justify-center '>
               {/* <Catalogue /> */}
            {/* </div> */}
<div className="bg-white w-screen text-center">
    <div className="w-4/5 m-auto">
    <h1 className="text-4xl m-0 p-24">How it works</h1>
           <Cards/>
           </div>
            </div>
       
        </div>
    );
};

export default Home;
