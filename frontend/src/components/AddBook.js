import React, { useEffect, useState } from "react";
import axios from "axios";

function AddBook() {

    const [books, setBooks]=useState([]);
    let value='978-9734673223';
    let url=`https://www.googleapis.com/books/v1/volumes?q=isbn:0883454726&key=AIzaSyAxUzNiUiHcisMxQTYFq5Hy-35A2C91-fQ`;
    
    
        const getBooks = async () => {
            const res = await axios.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699&key=AIzaSyAxUzNiUiHcisMxQTYFq5Hy-35A2C91-fQ");
        console.log(res.data);
                return res.data.items || [];
        };
    
        useEffect(()=> {
            getBooks().then(setBooks);
            console.log(books);
        }, []);
    


  return (
    <div>
      <form className='search-form'>
        <label>
            Insert ISBN
        </label>
        <input>
        </input>
      </form>
      <div className='search-result'>
{books && books.map(b=> {return <p>{b.volumeInfo.title}</p>})}
      </div>
    </div>
  )
}

export default AddBook
