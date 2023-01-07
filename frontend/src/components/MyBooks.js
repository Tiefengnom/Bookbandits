import React, { useState, useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";
import DeleteBook from "./DeleteBook";


function MyBooks() {
	const [books, setBooks] = useState(null);
	const {userID} = useUserContext()

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await fetch(`http://localhost:4000/bookbandits/${userID}/user_collection`);
			const json = await response.json();
			console.log(json)

			if (response.ok) {
				setBooks(json);
			}
		};

		fetchBooks();
        console.log(books)
	}, []);

	return (
		<div>
			<div className='search-result'>
				{userID
					? books
						? books.map((b) => {
								return (
									<div>
										<p>
											<strong>Title:</strong> {b.title}
										</p>
										<p>
											<strong>Authors:</strong> {b.author}
										</p>
									
										<p>
											<strong>Categories:</strong> {b.synopsis}
										</p>
										<p>
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
