import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Datetime from "react-datetime";
import { useUserContext } from "../hooks/useUserContext";
import Book from "../assets/book-open.png";

function SingleBook() {
    const [fetchedBook, setFetchedBook] = useState();
    const [btime, setBtime] = useState();
    const { user, setUser } = useUserContext();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/bookbandits/collection/${id}`)
            .then((res) => res.json())
            .then((finalResult) => setFetchedBook(finalResult));
        // eslint-disable-next-line
    }, []);

    const handleClick = async () => {
        const response = await fetch(`http://localhost:4000/bookbandits/collection/${id}`, {
            method: "POST",
            body: JSON.stringify({ borrowed: !fetchedBook.borrowed, owner: fetchedBook.owner,btime: btime, title: fetchedBook.title, borrower: user._id, borrowerfname : user.first_name, borrowerlname: user.last_name, pending: false }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        console.log(json);
    };

    return (
       /* fetchedBook && (
            <div className=' mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500 text-gray-700 w-72'>
                <strong> {fetchedBook.title}  </strong>
                <p>Available? </p> {fetchedBook.borrowed ? <p>No</p> : <p>Yes</p>}
                {fetchedBook.owner._id === user._id ? <div>you cant rent your own Books! </div> : !user._id ? <div>To book Books and see the Moment they are available, please register an account.</div> :
                !fetchedBook.borrowed ? !btime ?  <Datetime input={false} onChange={(e) => {setBtime(e._d)}}/> 
                :
                <button onClick={handleClick} className='bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>Now book your Book!</button> 
                :
                <button  className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>  This Book is rented until  {fetchedBook.btime.slice(8,10)}.{fetchedBook.btime.slice(5,7)}.{fetchedBook.btime.slice(0,4)} </button>}
                Book Details:
                <h3 onClick={(e) => console.log(`${new Date().getDate()}:${new Date().getMonth()}:${new Date().getFullYear()}`)}>{fetchedBook.title}</h3>
            <div className=' mb-2 bg-white p-3 shadow-lg rounded transition-colors border-b-2 border-transparent md:w-5/6 lg:max-w-screen-3xl m-auto'>
            <div className="flex flex-wrap md:flex-nowrap p-8"  > 
                <div className="w-96 flex flex-col justify-start text-left  bg-white-300 p-8 shadow-lg   rounded"> 
                <img src={!fetchedBook.image ? Book : fetchedBook.image} alt='book cover' className="mb-8 max-w-[150px]"/>
                <strong> {fetchedBook.title} </strong>
              
                <p>{fetchedBook.author}</p>
                <p >{fetchedBook.language}</p>
                <p>Owner: {fetchedBook.owner.first_name} {fetchedBook.owner.last_name}</p>
                <img src={fetchedBook.image} alt='book cover' />
                
                <p>Language: {fetchedBook.language}</p> 
                <p>Available now? </p> {fetchedBook.borrowed ? <span>No</span> : <span>Yes</span> }</div> 
                <div className="max-w-xl p-4 md:pl-10">
                <p className="text-left mt-8 md:mt-0 border-b-2 border-pink-600 pb-8">{fetchedBook.synopsis}</p> 
                {/* <p>{fetchedBook.owner}</p> }*/
               
              
                
                
                /*{!user._id ? (
                    <div className="mt-8">
                        {" "}
                        <p>To borrow books and see their availability, please create an account or log in.</p>{" "}
                        <button
                            onClick={() => navigate("/signup")}
                            className=' bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500 font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[35%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer m-3'>
                            Sign up
                        </button> <button
                    onClick={() => navigate("/login")}
                    className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer m-3'>
                    Log in
                </button> {" "}
                    </div>
                ) : !fetchedBook.borrowed ? (
                    !btime ? (
                        <Datetime
                            input={false}
                            onChange={(e) => {
                                setBtime(e._d);
                            }}
                        />
                    ) : (
                        <button
                            onClick={handleClick}
                            className='bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                            Request Book
                        </button>
                    )
                ) : (
                    <p className="pt-8">
                        {" "}
                        This book is not available until {fetchedBook.btime.slice(8, 10)}.{fetchedBook.btime.slice(5, 7)}.
                        {fetchedBook.btime.slice(0, 4)}{" "}
                    </p>
                    
                )}
                {user._id &&  <button
                        onClick={() => navigate(`/${user._id}/user_collection`)}
                        className='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                       My books
                    </button>} </div>
                     </div>
            </div>
            </div>
        )
    );*/
    fetchedBook && (
        <div className=' mb-2 bg-white p-3 shadow-lg rounded transition-colors border-b-2 border-transparent md:w-5/6 lg:max-w-screen-3xl m-auto'>
        <div className="flex flex-wrap md:flex-nowrap p-8"  > 
            <div className="w-96 flex flex-col justify-start text-left  bg-white-300 p-8 shadow-lg   rounded"> 
            <img src={!fetchedBook.image ? Book : fetchedBook.image} alt='book cover' className="mb-8 max-w-[150px]"/>
            <strong> {fetchedBook.title} </strong>
          
            <p>{fetchedBook.author}</p>
            <p>Language: {fetchedBook.language}</p> 
            <p>Available now? </p> {fetchedBook.borrowed ? <span>No</span> : <span>Yes</span> }</div> 
            <div className="max-w-xl p-4 md:pl-10">
            <p className="text-left mt-8 md:mt-0 border-b-2 border-pink-600 pb-8">{fetchedBook.synopsis}</p> 
            {/* <p>{fetchedBook.owner}</p> */}
           
          
            
            
            {!user._id ? (
                <div className="mt-8">
                    {" "}
                    <p>To borrow books and see their availability, please create an account or log in.</p>{" "}
                    <button
                        onClick={() => navigate("/signup")}
                        className=' bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500 font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[35%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer m-3'>
                        Sign up
                    </button> <button
                onClick={() => navigate("/login")}
                className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer m-3'>
                Log in
            </button> {" "}
                </div>
            ) : !fetchedBook.borrowed ? (
                !btime ? (
                    <Datetime
                        input={false}
                        onChange={(e) => {
                            setBtime(e._d);
                        }}
                    />
                ) : (
                    <button
                        onClick={handleClick}
                        className='bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                        Request Book
                    </button>
                )
            ) : (
                <p className="pt-8">
                    {" "}
                    This book is not available until {fetchedBook.btime.slice(8, 10)}.{fetchedBook.btime.slice(5, 7)}.
                    {fetchedBook.btime.slice(0, 4)}{" "}
                </p>
                
            )}
            {user._id &&  <button
                    onClick={() => navigate(`/${user._id}/user_collection`)}
                    className='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                   My books
                </button>} </div> </div>
        </div>
    )
);
}

export default SingleBook;
