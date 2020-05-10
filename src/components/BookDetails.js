import React, {useContext} from 'react';
import {BookContext} from '../context/BookContext.js';

function BookDetails({book}) {
  const {title, author} = book;
  const {removeFromBooks} = useContext(BookContext);
  return (
    <li className="list-item" onClick={() => removeFromBooks(book.id)}>
      <div>{title}</div>
      <div>{author}</div>
    </li>
  )
}

export default BookDetails;
