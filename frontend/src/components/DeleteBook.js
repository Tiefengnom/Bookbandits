import React, { useState } from "react";

const DeleteBook = ({ id }) => {
    const [error, setError] = useState(null);

    const deleteBook = async () => {
        const url = `http://localhost:4000/bookbandits/user/user_collection/${id}`;

        const response = await fetch(url, {
            method: "DELETE",
        });
        const json = await response.json();

        if (response.ok) {
            setError(null);
            console.log("book deleted", json);
        } else {
            setError(json.error);
        }
    };

    return (
        <div>
            <button onClick={deleteBook}>Delete</button>
        </div>
    );
};

export default DeleteBook;
