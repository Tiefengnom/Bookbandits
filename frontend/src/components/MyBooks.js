import React, { useState, useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";
import DeleteBook from "./DeleteBook";
import Logo from "../assets/logo-orange.png";


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
		// eslint-disable-next-line
	}, []);



	
	return (
		<div>
			<div className='search-result h-full'>
				{user._id
					? books
						? books.map((b) => {
								return (
									<div className="book-card mb-2 bg-white p-5 shadow-lg rounded transition-colors border-b-[4px] border-transparent hover:border-pink-500 text-gray-700 w-72 mb-6">
										<div>
										<img src={b.image? b.image : Logo} className="w-[100px] m-auto" alt='book-cover'/> </div>
										<p key={b._id}>	
											<strong>Title:</strong> {b.title}
										</p>
										<p>
											<strong>Authors:</strong> {b.author}
										</p>
									
										{/* <p>
											<strong>Synopsis:</strong> {b.synopsis}
										</p> */}
										<p>
											<strong>State:</strong> {b.state}
										</p>
										<p>
											<strong>Language:</strong> {b.language}
										</p>
										<p>
											<strong>Category:</strong> {b.category}
										</p>
										<p>
											<strong>Available:</strong> {b.borrowed ? <span> No</span> : <span>Yes</span>}
										</p>
										<p>
											{b.borrowed && <span>Borrowed by User-id</span>}
										</p>
										<p>
											{/*<strong>Description:</strong> {b.owner.last_name}*/}
										
										</p>
										
										
										<form>
											{/* Ideas: we can add an availability button to change the availability in case you gave the book to friends and not over the platform, a toggle. Also i am not sure that the submit works because i mised it with the delete */}
											<label for="state">What is the state of the book?</label>
											<select name="state" id="state" className="mb-3">
												<option value="new">New</option>
												<option value="ok">Ok</option>
												<option value="some damage or markings">Some damage or markings
												</option>
											</select>
											<button  type='submit'  className='bg-orange bg-opacity-[45%]  mb-3 mr-4 inline-block px-6 py-2 border-2 border-white-500 text-white-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Change info or state</button> 

										
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
