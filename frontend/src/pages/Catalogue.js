import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

function Catalogue() {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch("http://localhost:4000/bookbandits/collection")
            const json = await response.json()

            if (response.ok) {
                setBooks(json)
            }
        }


        fetchBooks()
    }, [])
    
    return (
        <div className="catalogue">
            <h2>Complete List of Books</h2>
            <div className="Books">
                {books && books.map((book) => (
                    <p key={book._id}>{book.title}</p>


                ))}
            </div> 
            <Outlet />
        </div>


    )


}

export default Catalogue
