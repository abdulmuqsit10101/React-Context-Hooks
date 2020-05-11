import React, {useContext} from 'react';
import BookDetails from "./BookDetails.js";
import {BookContext} from '../context/BookContext.js';

const BookList = () => {
  const {books} = useContext(BookContext);
  return (
    <ul>
      {
        books.map(book => {
          return (
            <BookDetails key={book.id} book={book}/>
          )
        })
      }
    </ul>
  )
};

export default BookList;

