import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SingleBook() {
    const [fetchedBook, setFetchedBook] = useState();
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
            body: JSON.stringify({ borrowed: !fetchedBook.borrowed }),
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
                <button onClick={handleClick}className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer'>Rent this Book? </button>
                Book Details:
                <h3>{fetchedBook.title}</h3>
                <p>{fetchedBook.author}</p>
                <p>{fetchedBook.language}</p>
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
