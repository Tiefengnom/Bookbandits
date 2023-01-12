import React, { useState, useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";
import Select from "react-select";
import { BarcodeScanner } from "./BarcodeScanner";
import BookIcon from "../assets/book-icon.png";

const options = [
    { value: "new", label: "new" },
    { value: "good", label: "good" },
    { value: "shabby", label: "has visible signs of use" },
];

function AddBook() {
    const [input, setInput] = useState("");
    const [books, setBooks] = useState([]);
    const [searchKey, setSearchKey] = useState();
    const [error, setError] = useState(null);
    const { user } = useUserContext();
    const [bookState, setBookState] = useState();
    const [startScan, setStartScan] = useState(false);

    const handleChange = ({ target }) => {
        setInput(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        setSearchKey(input.split("-").join(""));
    };

    const getBooks = async () => {
        console.log(searchKey);
        // %3A is url-encoding of char ':'
        //how to prevent the search of "isbn" while searchkey is not yet set?
        const url = `https://www.googleapis.com/books/v1/volumes?q=isbn%3A${searchKey}`;
        console.log(url);

        const response = await fetch(url);
        const data = await response.json();

        console.log(data.totalItems || 0);
        
        return setBooks(data.items || []);
    };

    useEffect(() => {
        getBooks();
        console.log(books);
        // eslint-disable-next-line
    }, [searchKey]);

	const submitBook = async (mybook) => {
       
		const data = mybook.volumeInfo;
		console.log("above return", data);
        !data.categories ? console.log('no categories') : console.log(data.categories)
        !data.synopsis ? console.log('no description') : console.log(data.synopsis)
        !data.imageLinks.smallThumbnail ? console.log("no image") : console.log(data.imageLinks.smallThumbnail)
		// saveToDB(data.title, data.desc)// async and await
		//connect the selected option in the form to the state in db
		//add dynamic params to owner
		const book = {
			title: data.title,
			author: data.authors.join(", "),
			synopsis: data.description || 'none',
			language: data.language,
			category: data.categories? data.categories[0] : 'none',
			state: bookState.value,
			owner: user._id,
			borrowed: false,
            image: data.imageLinks.smallThumbnail || "none"

		};
		console.log(book)
		const response = await fetch("http://localhost:4000/bookbandits/user/create_book", {
			method: "POST",
			body: JSON.stringify(book),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            console.log(error)
        }
        if (response.ok) {
            setSearchKey("");
            setBooks([]);
            setError(null);
            console.log("new book added", json);
        }
    };

    return (
        <div>
            <button onClick={(e) => setStartScan(true)}>Scan</button>
            <button onClick={(e) => setStartScan(false)}>Stop Scan</button>
            {startScan && <BarcodeScanner setSearchKey={setSearchKey} />}
            <form className='search-form' onSubmit={handleSubmit}>
                <label>Enter ISBN</label>
                <input value={input} onChange={handleChange}></input>
                <button type='submit'>Search </button>
            </form>

            <div className='search-result'>
                {searchKey
                    ? books.length
                        ? books.map((b) => {
                              return (
                                  <div>
                                      <p>
                                          <strong>Title:</strong> {b.volumeInfo.title}
                                      </p>
                                      <p>
                                          <strong>Authors:</strong> {b.volumeInfo.authors}
                                      </p>
                                      <p>
                                          <strong>Categories:</strong> {b.volumeInfo.categories}
                                      </p>
                                      <p>
                                          <strong>Language:</strong> {b.volumeInfo.language}
                                      </p>
                                      <p>
                                          <strong>Description:</strong> {b.volumeInfo.description}
                                      </p>
                                      <img
                                          src={b.volumeInfo.imageLinks?.smallThumbnail || BookIcon}
                                          alt='book thumbnail'
                                      />
                                      <form
                                          onSubmit={(e) => {
                                              e.preventDefault();
                                              submitBook(b);
                                          }}>
                                          <Select
                                              placeholder='Select the state of your book'
                                              onChange={setBookState}
                                              options={options}
                                          />
                                          <button type='submit'>Add to my books</button>
                                      </form>
                                  </div>
                              );
                          })
                        : "No books found."
                    : "Please enter a valid search key."}
            </div>
        </div>
    );
}

export default AddBook;
