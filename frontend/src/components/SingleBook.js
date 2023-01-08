import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function SingleBook() {

const [fetchedBook, setFetchedBook]=useState();

const {id}=useParams();

useEffect(() => {
    fetch(`http://localhost:4000/bookbandits/collection/${id}`)
      .then(res => res.json())
      .then(finalResult => setFetchedBook(finalResult))
      console.log(fetchedBook)
  }, []) 

  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/bookbandits/collection/${id}`, {
      method: "POST",
			body: JSON.stringify({"borrowed": !fetchedBook.borrowed}),
			headers: {
				 "Content-Type": "application/json"
			}


    })
        const json = await response.json();
        console.log(json)

  }

  return (
    fetchedBook &&    <div>
     Some Book here: {fetchedBook.title}
     <p>Is it free to borrow? </p> {fetchedBook.borrowed ? <p>Yes</p> : <p>No</p> }
     <button onClick={handleClick}>Rent this Book?</button>
    </div>
  )
}

export default SingleBook
