import React, { useState } from 'react'

function Filters() {
//router.get("/collection/?q=:query", searchBooks)
const [error, setError]=useState()
const query = 'steinbeck'

const filterBooks = async ()=>{

const response = await fetch(`http://localhost:4000/bookbandits/collection/?q=${query}`, {
    method: "GET",
   });
const json = await response.json();

if (!response.ok) {
    setError(json.error);
}
if (response.ok) {
   
    console.log("found it!", json);
}
};





  return (
    <div>
      
    </div>
  )
}


export default Filters
