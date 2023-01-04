import React from 'react'
import { useParams } from 'react-router-dom'

function SingleBook() {

const myParams=useParams();
console.log(myParams)

  return (
    <div>
      Some Book here
    </div>
  )
}

export default SingleBook
