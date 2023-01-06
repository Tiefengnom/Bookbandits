import React from "react";

const DeleteBook = ({id}) => {
	const deleteBook = () => {
    console.log(`TODO: delete book ${id} from db`);
  };

	return (
		<div>
			<button onClick={deleteBook}>Delete</button>
		</div>
	);
}

export default DeleteBook;
