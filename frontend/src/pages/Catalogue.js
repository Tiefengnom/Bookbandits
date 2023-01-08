import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Catalogue() {
	const [books, setBooks] = useState(null);
	const [search, setSearch] = useState(null)
	const [searchedBooks, setSearchedBooks] = useState(null)
	const [error,setError] = useState(null)

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await fetch("http://localhost:4000/bookbandits/collection");
			const json = await response.json();

			if (response.ok) {
				setBooks(json);
			}
		};

		fetchBooks();
		console.log(books)
	}, []);

	const handleSubmit= async (e) => {
        e.preventDefault()
        
		const x = {search}
        console.log(x)

        const response = await fetch("http://localhost:4000/bookbandits/collection", {
            method: "POST" ,
            body: JSON.stringify(x),
            headers: {
                "Access-Control-Allow-Origin" : "*",
				"Content-Type" : "application/json"
            }
        })
        const json = await response.json()
        
		if (!response.ok) {
            setError(json.error)
     }

     if (response.ok) {
		setSearchedBooks(json)
		console.log(searchedBooks)
        setError(null)
           
     }
    }
	


	return (
		<div className='catalogue'>
			<form onSubmit={handleSubmit}>
			<input onChange={(e) => setSearch(e.target.value)} />
			<button>Search</button>
			</form>
			<div className='searchedBooks'>
				{searchedBooks &&
					searchedBooks.map((book) => (
						<>
							<p key={book._id}>{book.title}</p>
							<p>
								<Link to={`/catalogue/${book._id}`}>more info</Link>
							</p>
						</>
					))}
			</div>
			<h2>Complete List of Books</h2>
			<div className='Books'>
				{books &&
					books.map((book) => (
						<>
							<p key={book._id}>{book.title}</p>
							<p>borrowed: {book.borrowed}</p>
							<p>{book.owner.first_name} {book.owner.last_name}</p>
							<p>
								<Link to={`/catalogue/${book._id}`}>more info</Link>
							</p>
						</>
					))}
			</div>
			<Outlet />
		</div>
	);
}

export default Catalogue;
