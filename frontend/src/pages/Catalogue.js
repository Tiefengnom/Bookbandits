import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../index.css";

import Checklist from "../components/Checklist";
import Book from "../assets/book-open.png";
import Toggle from "../components/Toggle";
// import Switch from "../components/Switch";

//values are static so they dont need to be inside the component function because theyx dont need to be recalculated every time. performance reasons.

const languages = [
    { value: "", label: "none" },
    { value: "en", label: "English" },
    { value: "de", label: "German" },
    { value: "ro", label: "Romanian" },
    { value: "it", label: "Italian" },
    { value: "fr", label: "French" },
    { value: "es", label: "Spanish" },
    { value: "ru", label: "Russian" },
];

const genres = [
    { value: "", label: "none" },
    { value: "Biography & Autobiography", label: "Biography & Autobiography" },
    { value: "Art", label: "Art" },
    { value: "Religion", label: "Religion" },
    { value: "drama", label: "drama" },
    { value: "romance", label: "romance" },
    { value: "Fiction", label: "Fiction" },
    { value: "fantasy", label: "fantasy" },
    { value: "adventure", label: "adventure" },
];

function Catalogue() {
    const navigate = useNavigate();
    const [books, setBooks] = useState(null);
    const [search, setSearch] = useState(null);
    const [searchedBooks, setSearchedBooks] = useState(null);
    const [error, setError] = useState(null);
    const [language, setLanguage] = useState("");
    const [genre, setGenre] = useState("");
    // const [availability, setAvailability] = useState(false);
    const [searchValidation, setSearchValidation] = useState(false);

    //LATER
    // const [selectedDelivery, setSelectedDelivery] = useState('');
    // const [selectedPlz, setSelectedPlz] = useState('');

    // const availabilities = [
    //     { value: true, label: "available now" },
    //     { value: "mail", label: "available per mail" },
    //     { value: "local", label: "locally available" },
    // ];

    const [enabledFrom, setEnabledFrom] = useState();
    const [enabledBy, setEnabledBy] = useState();

    const fetchBooks = async () => {
        const response = await fetch("http://localhost:4000/bookbandits/collection");
        const json = await response.json();

        if (response.ok) {
            setBooks(json);
            console.log("All books:", json);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(search);
        setSearchValidation(false);
        if (!search && !genre && !language) {
            setSearchValidation(true);
            return;
        }

        const response = await fetch("http://localhost:4000/bookbandits/collection", {
            method: "POST",
            body: JSON.stringify({ query: search, language: language, genre: genre }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        if (response.ok) {
            setSearchedBooks(json);
            console.log("searched:", json);
            setError(null);
        } else {
            setError(json.error);
            console.log(error);
        }
    };

    return (
        <div>
            <div>
                <div>
                    <div className='catalogue w-full pt-12 px-4 lg:flex lg:justify-center md:align-center'>
                        <div className='checklist p-4 flex justify-center'>
                            <Checklist
                                options={languages}
                                placeholder='Select language'
                                setSelectedOption={setLanguage}
                            />
                        </div>

                        <div className='checklist p-4 flex justify-center'>
                            <Checklist options={genres} placeholder='Select genre' setSelectedOption={setGenre} />
                        </div>
                        <div className='flex align-middle justify-center mt-[20px]'>
                            <Toggle toggle={enabledBy} setToggle={setEnabledBy} label={"Available now"} to />
                            <Toggle toggle={enabledFrom} setToggle={setEnabledFrom} label={"Available via mail"} />
                        </div>

                       
                    </div>
                    <form onSubmit={handleSubmit} className='checklist p-4 flex justify-center'>
                            <span className='h-fit'>
                                <input
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder='Search for key word...'
                                    className='bg-white rounded-full border-2 border-pink-500 px-3 py-1 leading-none text-sm transition-colors placeholder-gray placeholder-opacity-80 w-[270px] m-0 mr-4'
                                />
                            </span>
                            <button
                                type='submit'
                                className='flex text-center bg-white w-fit bg-opacity-90 px-10 py-2 border-2 border-white-500  font-medium text-xs leading-tight rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer mb-8'>
                                <p className='mr-1 p-0 text-md'>Apply Filters</p>
                                <svg
                                    aria-hidden='true'
                                    focusable='false'
                                    data-prefix='fas'
                                    data-icon='search'
                                    className='w-4 m-0'
                                    role='img'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 512'>
                                    <path
                                        fill='pink'
                                        d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
                                </svg>
                            </button>
                        </form>
                    <div className='flex justify-center align-center'></div>
                    {/* <Switch
        isOn={mail}
        handleToggle={() => setCheck(!check)}
      /> */}
                    {/* <Switch
        isOn={availability}
        handleToggle={() => setAvailability(!availability)}
      /> */}

                    <div className='p-2  bg-orange-50 bg-opacity-20 w-fit  rounded-sm'>
                        <div className='p-2 m-auto'>
                            {searchedBooks === null ? (
                                <div></div>
                            ) : searchedBooks.length === 0 ? (
                                <div>No results found.</div>
                            ) : (
                                <div className='text-5xl mb-3 p-4 font-bold'>Search Results</div>
                            )}
                            {searchValidation && <p>Please enter a search criterion.</p>}{" "}
                        </div>
                        <div className='searchedBooks Books p-4 md:flex md:justify-center md:flex-wrap'>
                            {searchedBooks &&
                                searchedBooks.map((book) => (
                                    <div
                                        key={book._id}
                                        className='book-card p-4 m-4 bg-white  shadow-lg rounded  transition-colors border-b-[4px] border-transparent hover:border-pink-500 text-gray-700 w-72 text-center'>
                                        <img
                                            onClick={()=>navigate(`/catalogue/${book._id}`)}
                                            src={book.image || book.image === "none" ? book.image : Book}
                                            alt='book cover'
                                            className='h-[200px] m-auto mb-4'
                                        />
                                        <strong>
                                            {" "}
                                            <h3 key={book._id} className="text-lg text-bold">{book.title}</h3>{" "}
                                        </strong>

                                        <p>{book.author}</p>
                                        <p>Language: {book.language}</p>

                                        <div>
                                            <p>Available: {book.borrowed ? <span>No</span> : <span>Yes</span>}</p>
                                            <p className='hover:text-pink-600'>
                                                <button
                                                    onClick={()=>navigate(`/catalogue/${book._id}`)}
                                                    className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                                                    More info
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <h2 className='text-5xl mb-3 p-4 font-bold'>All Books</h2>
                        <div className='Books p-4 md:flex md:justify-center md:flex-wrap'>
                            {books &&
                                books.map((book) => (
                                    <div
                                        key={book._id}
                                        className='book-card p-4 m-4 bg-white  shadow-lg rounded  transition-colors border-b-[4px] border-transparent hover:border-pink-500 text-gray-700 w-72 text-center'>
                                        <img
                                            onClick={()=>navigate(`/catalogue/${book._id}`)}
                                            src={book.image !== "none" ? book.image : Book}
                                            alt='book cover'
                                            className='h-[200px] m-auto mb-4'
                                        />
                                        <strong>
                                            {" "}
                                            <h3 key={book._id} className="text-lg text-bold">{book.title}</h3>{" "}
                                        </strong>

                                        <p>{book.author}</p>
                                        <p>Language: {book.language}</p>

                                        <div>
                                            <p>Available: {book.borrowed ? <span>No</span> : <span>Yes</span>}</p>
                                            <p className='hover:text-pink-600'>
                                                <button
                                                    onClick={()=>navigate(`/catalogue/${book._id}`)}
                                                    className=' bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                                                    More Info
                                                </button>
                                            </p>
                                        </div>
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
