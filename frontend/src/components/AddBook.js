import React, { useState, useEffect } from "react";
import axios from "axios";

function AddBook() {
	const [input, setInput] = useState("");
	const [books, setBooks] = useState([]);
	const [searchKey, setSearchKey] = useState("");
	// let value='978-9734673223';
	// let url=`https://www.googleapis.com/books/v1/volumes?q=isbn:0883454726&key=AIzaSyAxUzNiUiHcisMxQTYFq5Hy-35A2C91-fQ`;

	const handleChange = ({ target }) => {
		setInput(target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
    console.log(input);
    setSearchKey(input);
	};

	const getBooks = async () => {
		console.log(searchKey);
    // %3A is url-encoding of char ':'
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn%3A${searchKey}&key=AIzaSyAxUzNiUiHcisMxQTYFq5Hy-35A2C91-fQ`; 
    console.log(url);

    const { data } = await axios.get(url);
		console.log(data.totalitems);
		return setBooks(data.items || []);
	};

	useEffect(() => {
		getBooks();
		console.log(books);
	}, [searchKey]);

	return (
		<div>
			<form
				className='search-form'
				onSubmit={handleSubmit}>
				<label>Enter ISBN</label>
				<input
					placeholder='enter isbn'
					value={input}
					onChange={handleChange}></input>
				<button type='submit'>Search </button>
			</form>
			<div className='search-result'>
				{books
					? books.map((b) => {
							return (
								<p>{b.volumeInfo.title}</p>
							);
					  })
					: "loading info"}
			</div>
		</div>
	);
}

export default AddBook;
