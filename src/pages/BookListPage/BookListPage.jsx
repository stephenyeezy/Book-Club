import React, { useState, useEffect } from "react";
import "./BookListPage.css";
import BookListItem from "../../components/BookListItem/BookListItem";
import * as bookAPI from "../../services/books-api";

function BookListPage(props) {
  const [books, setBooks] = useState([]);
  const [change, setChange] = useState(true);
  useEffect(function() {
    bookAPI.getAll().then(res => setBooks(res))
  }, [change])
  return (
    <>
      <h1>Book List</h1>
      <div className="BookList-grid">
        {books.map(book => (
          <BookListItem 
            book={book} 
            key={book._id} 
            change={change}
            setChange={setChange}
            handleDeleteBook={props.handleDeleteBook}
          />
        ))}
      </div>
    </>
  );
}

export default BookListPage;