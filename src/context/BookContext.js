import React, {useState, createContext} from 'react';
import {v1 as uuidv1} from 'uuid';

export const BookContext = createContext();

function BookContextProvider(props) {

  const [books, setBooks] = useState(
    [
      {id: 0, title: 'God of war', author: 'James john'},
      {id: 1, title: 'Science', author: 'Scientists'},
      {id: 2, title: 'Life and Death', author: 'William peter'}
    ]
  );

  const addToBooks = (title, author) => {
    setBooks([...books, {id: uuidv1(), title, author}])
  };

  const removeFromBooks = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  };

  return (
    <BookContext.Provider value={{books, addToBooks, removeFromBooks}}>
      {props.children}
    </BookContext.Provider>
  )

}

export default BookContextProvider;
