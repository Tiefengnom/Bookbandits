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

  return (
    fetchedBook &&    <div>
     Some Book here: {fetchedBook.title}
    </div>
  )
}

export default SingleBook
