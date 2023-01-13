import React from "react";
import logo from '../assets/logo-orange.png'
import { useNavigate } from "react-router-dom";

function Cards() {


    const navigate = useNavigate();
    return (
        <div className="flex justify-around flex-wrap pb-16">
            <div className='cards-home m-4'>
                <div class='flex justify-center'>
                    <div class='rounded-lg shadow-lg  hover:bg-white p-4 w-[300px]'  onClick={() => navigate("/signup")}>
                        <a href='#!' className='flex justify-center'>
                            <img
                                class='rounded-full h-[160px] w-[200px] m-0'
                                src={logo}
                                alt=''
                            />
                        </a>
                        <div class='p-6'>
                            <h5 class='text-gray-900 text-xl font-medium mb-2'>Register</h5>
                            <p class='text-gray-700 text-base mb-4'>
                               Join the community and use the platform for free. Find your books and your people!
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className='cards-home m-4'>
                <div class='flex justify-center'>
                    <div class='rounded-lg shadow-lg p-4  hover:bg-white w-[300px]' onClick={() => navigate("/signup")}>
                        <a href='#!' className='flex justify-center'>
                            <img
                              class='rounded-full h-[160px] w-[200px] m-0'
                                src={logo}
                                alt=''
                            />
                        </a>
                        <div class='p-6'>
                            <h5 class='text-gray-900 text-xl font-medium mb-2'>Scan</h5>
                            <p class='text-gray-700 text-base mb-4'>
                               Easily add books to your profile by scanning the back of the book or manually entering the ISBN. 
                            </p>
                          
                        </div>
                    </div>
                </div>
            </div>

            <div className='cards-home m-4'>
                <div class='flex justify-center'>
                    <div class='rounded-lg shadow-lg hover:bg-white p-4 w-[300px]' onClick={() => navigate("/catalogue")}>
                        <a href='#!' className='flex justify-center'>
                            <img
                              class='rounded-full h-[160px] w-[200px] m-0'
                                src={logo}
                                alt=''
                            />
                        </a>
                        <div class='p-6'>
                            <h5 class='text-gray-900 text-xl font-medium mb-2'>Borrow</h5>
                            <p class='text-gray-700 text-base mb-4'>
                             Browse the catalogue and get access to thousands of books in your language, wherever you are.
                            </p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
