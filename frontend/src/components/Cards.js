import React from "react";

function Cards() {
    return (
        <div className="flex justify-around flex-wrap">
            <div className='cards-home m-4'>
                <div class='flex justify-center'>
                    <div class='rounded-lg shadow-lg bg-white p-4 w-[300px]'>
                        <a href='#!' className='flex justify-center'>
                            <img
                                class='rounded-full h-[200px] w-[200px] m-0'
                                src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
                                alt=''
                            />
                        </a>
                        <div class='p-6'>
                            <h5 class='text-gray-900 text-xl font-medium mb-2'>Register</h5>
                            <p class='text-gray-700 text-base mb-4'>
                               Join the community and use the platform for free. Find your books and your people!
                            </p>
                            <button
                                type='button'
                                class=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cards-home m-4'>
                <div class='flex justify-center'>
                    <div class='rounded-lg shadow-lg bg-white p-4 w-[300px]'>
                        <a href='#!' className='flex justify-center'>
                            <img
                                class='rounded-full h-[200px] w-[200px] m-0'
                                src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
                                alt=''
                            />
                        </a>
                        <div class='p-6'>
                            <h5 class='text-gray-900 text-xl font-medium mb-2'>Scan</h5>
                            <p class='text-gray-700 text-base mb-4'>
                               Easily add books to your profile by scanning the back of the book or manually entering the ISBN. 
                            </p>
                            <button
                                type='button'
                                class=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cards-home m-4'>
                <div class='flex justify-center'>
                    <div class='rounded-lg shadow-lg bg-white p-4 w-[300px]'>
                        <a href='#!' className='flex justify-center'>
                            <img
                                class='rounded-full h-[200px] w-[200px] m-0'
                                src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
                                alt=''
                            />
                        </a>
                        <div class='p-6'>
                            <h5 class='text-gray-900 text-xl font-medium mb-2'>Borrow</h5>
                            <p class='text-gray-700 text-base mb-4'>
                             Browse the catalogue and get access to thousands of books in your language, wherever you are.
                            </p>
                            <button
                                type='button'
                                class=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
