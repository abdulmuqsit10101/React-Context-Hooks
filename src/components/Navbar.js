import React, {useContext} from 'react';
import {BookContext} from '../context/BookContext.js'

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <nav>
      <h1>Ali's reading List</h1>
      <p> There are {books.length} books available to read</p>
    </nav>
  )
};

export default Navbar;
