import React from "react";
import logo from '../assets/logo-orange.png'
import { useNavigate } from "react-router-dom";

function Cards() {


    const navigate = useNavigate();
    return (
        <div className="flex justify-around flex-wrap pb-16">
            <div className='cards-home m-4'>
                <div className='flex justify-center'>
                    <div className=' h-[350px] rounded-lg shadow-lg  hover:hover:bg-gradient-to-br from-yellow-200 to-pink-200 p-4 w-[300px]'  onClick={() => navigate("/signup")}>
                        <a href='#!' className='flex justify-center'>
                            <img
                                className='rounded-full h-[160px] w-[200px] m-0'
                                src={logo}
                                alt=''
                            />
                        </a>
                        <div className='p-6'>
                            <h5 className='text-gray-600 text-xl font-bold font-medium mb-2'>Register</h5>
                            <p className='text-gray-600  mb-4 text-sm'>
                               Join the community and use the platform for free. Find your books and your people!
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className='cards-home m-4'>
                <div className='flex justify-center'>
                    <div className='h-[350px]  rounded-lg shadow-lg p-4  hover:hover:bg-gradient-to-br from-yellow-200 to-pink-200 w-[300px]' onClick={() => navigate("/signup")}>
                        <a href='#!' className='flex justify-center'>
                            <img
                              className='rounded-full h-[160px] w-[200px] m-0'
                                src={logo}
                                alt=''
                            />
                        </a>
                        <div className='p-6'>
                            <h5 className='text-gray-600 text-xl font-bold font-medium mb-2'>Scan</h5>
                            <p className='text-gray-600 text-sm mb-4'>
                               Easily add books to your profile by scanning the back of the book or manually entering the ISBN. 
                            </p>
                          
                        </div>
                    </div>
                </div>
            </div>

            <div className='cards-home m-4'>
                <div className='flex justify-center'>
                    <div className='h-[350px]  rounded-lg shadow-lg hover:bg-gradient-to-br from-yellow-200 to-pink-200 p-4 w-[300px]' onClick={() => navigate("/catalogue")}>
                        <a href='#!' className='flex justify-center'>
                            <img
                              className='rounded-full h-[160px] w-[200px] m-0'
                                src={logo}
                                alt=''
                            />
                        </a>
                        <div className='p-6'>
                            <h5 className='text-gray-600 text-xl font-bold  mb-2'>Borrow</h5>
                            <p className='text-gray-600 text-sm mb-4'>
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
