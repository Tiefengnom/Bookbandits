import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import { useUserContext } from "../hooks/useUserContext";


function MyBooks() {
  const [input, setInput] = useState("");
	const [books, setBooks] = useState(null);
	const [searchKey, setSearchKey] = useState();
	const [error, setError] = useState(null);
	const {userID, setUserID} = useUserContext()

	

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



	const handleDelete = async (e) => {
	e.preventDefault()
	console.log(e)




	}


	return (
		<div>
			

			<div className='search-result'>
				{userID
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
											<strong>borrowed:</strong> {b.borrowed}
										</p>
										<p>
											{/*<strong>Description:</strong> {b.owner.last_name}*/}
										</p>
										
										<form
										>
											<input type='text' placeholder='add info'></input>
											<label for="state">What is the state of the book?</label>
											<select name="state" id="state">
												<option value="new">new</option>
												<option value="ok">ok</option>
												<option value="some damage or markings">some damage or markings</option>
											</select>
											<button type='submit'>Change info or state</button>
											<button onClick={handleDelete} >delete</button>
										</form>
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
