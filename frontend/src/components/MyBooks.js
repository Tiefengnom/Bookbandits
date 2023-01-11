import React, { useState, useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";
import DeleteBook from "./DeleteBook";


function MyBooks() {
	const [books, setBooks] = useState(null);
	const {user} = useUserContext()

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await fetch(`http://localhost:4000/bookbandits/${user._id}/user_collection`);
			const json = await response.json();
			console.log(json)

			if (response.ok) {
				setBooks(json);
			}
		};

		fetchBooks();
        console.log(books)
	}, []);



	const handleDelete = async (e) => {
	e.preventDefault()
	console.log(e)




	}


	return (
		<div>
			<div className='search-result  bg-gradient-to-br from-yellow-500 to-pink-600'>
				{user._id
					? books
						? books.map((b) => {
								return (
									<div>
										<p key={b._id}>	
											<strong>Title:</strong> {b.title}
										</p>
										<p>
											<strong>Authors:</strong> {b.author}
										</p>
									
										<p>
											<strong>Synopsis:</strong> {b.synopsis}
										</p>
										<p>
											<strong>state:</strong> {b.state}
										</p>
										<p>
											<strong>language:</strong> {b.language}
										</p>
										<p>
											<strong>category:</strong> {b.category}
										</p>
										<p>
											<strong>borrowed:</strong> {b.borrowed ? <span> Yes</span> : <span>No</span>}
										</p>
										<p>
											{/*<strong>Description:</strong> {b.owner.last_name}*/}
											<strong>Language:</strong> {b.language}
										</p>
										
										
										<form>
											<input type='text' placeholder='add info'></input>
											<label for="state">What is the state of the book?</label>
											<select name="state" id="state">
												<option value="new">new</option>
												<option value="ok">ok</option>
												<option value="some damage or markings">some damage or markings
												</option>
											</select>
											<button type='submit'>Change info or state</button>
											<button onClick={handleDelete} >delete</button>
										</form>
										<DeleteBook id={b._id}/>
									</div>
								);
						})
						: "loading info"
					: "Not logged in"}
			</div>
		</div>
	);
}

export default MyBooks
