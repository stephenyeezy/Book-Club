import React from 'react';
import BookCard from '../../components/BookCard/BookCard';

function BookDetailPage(props) {
  const book = props.location.state.book;
  return (
    <>
      <h1>Book Details</h1>
      <BookCard
        key={book._id}
        book={book}
      />
    </>
  );
}

export default BookDetailPage;