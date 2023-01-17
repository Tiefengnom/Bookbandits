import React, { useState, useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";
import Select from "react-select";
import { BarcodeScanner } from "./BarcodeScanner";
import Book from "../assets/book-open.png";

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
        !data.description ? console.log('no description') : console.log(data.description)
        !data.imageLinks?.smallThumbnail ? console.log("no image") : console.log(data.imageLinks.smallThumbnail)
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
            pending: false,
            image: data.imageLinks?.smallThumbnail || "none"
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
        <div className=' mb-2 bg-white p-3 shadow-lg rounded transition-colors border-b-2 border-transparent lg:max-w-screen-3xl m-auto'>
            <button onClick={(e) => setStartScan(true)}  className='mt-6 mb-6 mr-4 inline-block px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-2'>Scan</button>
            <button onClick={(e) => setStartScan(false)} className=' bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer m-2'>Stop Scan</button>
            {startScan && <BarcodeScanner setSearchKey={setSearchKey} />}
            <form className='search-form' onSubmit={handleSubmit}>
                <label>Enter ISBN</label>
                <input value={input} onChange={handleChange} className=" bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 m-2"></input>
                <button type='submit' className=' bg-white bg-opacity-90 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer m-2'>Search </button>
            </form>

            <div className='search-result'>
                {searchKey
                    ? books.length
                        ? books.map((b) => {
                              return (
                                  <div key={b.id}>
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
                                          src={b.volumeInfo.imageLinks?.medium || Book}
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
                                          <button type='submit' className=' bg-white bg-opacity-60 px-6 py-2 border-2 border-white-500  font-medium text-xs leading-tight  rounded-full hover:bg-pink-600 hover:bg-opacity-[45%] focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor:pointer m-2'>Add to my books</button>
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
