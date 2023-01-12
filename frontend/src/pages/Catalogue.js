import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";

import Checklist from "../components/Checklist";
import Logo from "../assets/logo-orange.png";

function Catalogue() {
    const [books, setBooks] = useState(null);
    const [search, setSearch] = useState(null);
    const [searchedBooks, setSearchedBooks] = useState(null);
    const [error, setError] = useState(null);

    const languages = [
        { value: "en", label: "English" },
        { value: "de", label: "Deutsch" },
        { value: "ro", label: "Romana" },
        { value: "it", label: "Italiano" },
        { value: "fr", label: "Francaise" },
    ];

    const genres = [
        { value: "crime", label: "crime" },
        { value: "romance", label: "romance" },
        { value: "mystery", label: "mystery" },
        { value: "fantasy", label: "fantasy" },
        { value: "adventure", label: "adventure" },
    ];

    const availability = [
        { value: true, label: "available now" },
        { value: "mail", label: "available per mail" },
        { value: "local", label: "locally available" },
    ];

    const fetchBooks = async () => {
        const response = await fetch("http://localhost:4000/bookbandits/collection");
        const json = await response.json();

        if (response.ok) {
            setBooks(json);
        }
    };

    useEffect(() => {
        fetchBooks();
        
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(search);

        const response = await fetch("http://localhost:4000/bookbandits/collection", {
            method: "POST",
            body: JSON.stringify({ query: search }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        if (response.ok) {
            setSearchedBooks(json);
            console.log(searchedBooks);
            setError(null);
        } else {
            setError(json.error);
            console.log(error)
        }
    };

    return (
        <div className='flex justify-center header h-full w-full bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4 text-white'>
            <div className='flex justify-center'>
                <div className='catalogue w-full pt-12 pb-12 px-4 text-white'>
                    <form onSubmit={handleSubmit}>
                        <span className='flex justify-center'>
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder='Search...'
                                className='text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 m-2 my-8 w-[270px]'
                            />

                            <button type='button' class='inline-block transition duration-150 ease-in-out'>
                                <svg
                                    aria-hidden='true'
                                    focusable='false'
                                    data-prefix='fas'
                                    data-icon='search'
                                    class='w-4'
                                    role='img'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 512'>
                                    <path
                                        fill='currentColor'
                                        d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
                                </svg>
                            </button>
                        </span>
                    </form>
                    <div className='checklist p-4'>
                        <Checklist options={languages} placeholder='Select Languages' />
                    </div>

                    <div className='checklist p-4'>
                        <Checklist options={genres} placeholder='Select Genres' />
                    </div>

                    <div className='checklist p-4'>
                        <Checklist options={availability} placeholder='Availability' />
                    </div>

                    <div className='p-2'>
                        <div className='searchedBooks '>
                            {searchedBooks &&
                                searchedBooks.map((book) => (
                                    <div className='book-card mb-2 bg-white p-3 shadow-lg rounded transition-colors border-b-2 border-transparent hover:border-pink-500 text-gray-700 w-72'>
                                        <h3 key={book._id}>{book.title}</h3>
                                        <p>{book.author}</p>
                                        <p className="hover:text-pink-500">
                                            <Link to={`/catalogue/${book._id}`}>More Info</Link>
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <h2 className='text-2xl font-light mb-3'>Complete List of Books</h2>
                        <div className='Books'>
                            {books &&
                                books.map((book) => (
                                    <div className='book-card mb-2 bg-white p-5 shadow-lg rounded  transition-colors border-b-[4px] border-transparent hover:border-pink-500 text-gray-700 w-72 mb-6 text-center'>
                                          <img
                                            src={book.image ? book.image : Logo}
                                            alt='book cover'
                                            className='w-[150px] m-auto'
                                        />
                                        <strong>
                                            {" "}
                                            <h3 key={book._id}>{book.title}</h3>{" "}
                                        </strong>

                                        <p>
                                            {book.author}
                                        </p>
                                        <p>
                                            Language: {book.language}
                                        </p>
                                      
                                        <p>
                                            <p>Available: {book.borrowed ? <span>No</span> : <span>Yes</span>}</p>
                                            <p className="hover:text-pink-600">
                                            <Link to={`/catalogue/${book._id}`} >More info</Link></p>
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalogue;
