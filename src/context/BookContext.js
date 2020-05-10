import React, {useState, createContext} from 'react';

export const BookContext = createContext();

function BookContextProvider(props) {

  const [books, setBooks] = useState(
    [
      {id: 0, title: 'God of war', author: 'James john'},
      {id: 1, title: 'Science', author: 'Scientists'},
      {id: 2, title: 'Life and Death', author: 'William peter'}
    ]
  );

  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  )

}

export default BookContextProvider;
