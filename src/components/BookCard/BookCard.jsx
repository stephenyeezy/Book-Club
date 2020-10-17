import React from 'react';
import {Link} from 'react-router-dom';

function BookCard({book}) {
  return(
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{book.title}</h3>
      </div>
      <div className='panel-body'>
          <dd><img src={book.image} alt="thumbnail"></img></dd>
          <dt>Author: {book.author}</dt>
          <dt>Published: {book.published}</dt>
          <dt>Description:</dt>
          <dd>{book.description}</dd>
          {book.purchase && <dd><a href={book.purchase}>Purchase Book</a></dd>}
      </div>
      <div className='panel-footer'>
        <Link to='/list'>RETURN TO LIST</Link>
      </div>
    </div>    
  );
}

export default BookCard;