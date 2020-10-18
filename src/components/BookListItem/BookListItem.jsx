import React from 'react';
import {Link} from 'react-router-dom';
import './BookListItem.css';

function BookListItem(props) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <img src={props.book.image} alt="thumbnail"></img>
        <h3 className='panel-title'>{props.book.title}</h3>
      </div>
      <div className='panel-footer BookListItem-action-panel'>
      <Link
        className='btn btn-xs'
        to={{
          pathname: '/details',
          state: {book: props.book}
        }}
      >
        DETAILS
      </Link>
      <button
        className="btn btn-xs margin-left-10"
        onClick={() => props.handleDeleteBook(props.book._id)}
      >
        DELETE
      </button>
      </div>
    </div>
  );
}
export default BookListItem;