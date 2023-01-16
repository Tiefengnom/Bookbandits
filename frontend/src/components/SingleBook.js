import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Datetime from 'react-datetime'
import { useUserContext } from "../hooks/useUserContext";

function SingleBook() {
    const [fetchedBook, setFetchedBook] = useState();
    const [btime, setBtime] = useState()
    const { user, setUser } = useUserContext();
const navigate=useNavigate()
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
            body: JSON.stringify({ borrowed: !fetchedBook.borrowed, owner: fetchedBook.owner,btime: btime, title: fetchedBook.title, borrower: user._id }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        console.log(json);
    };
    
    return (
        fetchedBook && (
            <div className=' mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500 text-gray-700 w-72'>
                <strong> {fetchedBook.title}  </strong>
                <p>Available? </p> {fetchedBook.borrowed ? <p>No</p> : <p>Yes</p>}
                {!user._id ? <div>To book Books and see the Moment they are available, please register an account.</div> :
                !fetchedBook.borrowed ? !btime ?  <Datetime input={false} onChange={(e) => {setBtime(e._d)}}/> 
                :
                <button onClick={handleClick} className='bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>Now book your Book!</button> 
                :
                <button  className=' bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>  This Book is rented until  {fetchedBook.btime.slice(8,10)}.{fetchedBook.btime.slice(5,7)}.{fetchedBook.btime.slice(0,4)} </button>}
                Book Details:
                <h3 onClick={(e) => console.log(fetchedBook.btime)}>{fetchedBook.title}</h3>
                <p>{fetchedBook.author}</p>
                <p >{fetchedBook.language}</p>
                <p>{fetchedBook.owner}</p>
                <img src={fetchedBook.image} alt='book cover' />
                <button
                    onClick={() => navigate("/catalogue")}
                    className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>
                    Back
                </button>
            </div>
        )
    );
}

export default SingleBook;
