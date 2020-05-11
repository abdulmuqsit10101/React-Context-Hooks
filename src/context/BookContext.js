import React, {useReducer, createContext} from 'react';
import {bookReducer} from "../reducers/bookReducer.js"

export const BookContext = createContext();

function BookContextProvider(props) {

  const [books, dispatch] = useReducer(bookReducer,
    [
      {id: 0, title: 'God of war', author: 'James john'},
      {id: 1, title: 'Science', author: 'Scientists'},
      {id: 2, title: 'Life and Death', author: 'William peter'}
    ]
  );

  return (
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )

}

export default BookContextProvider;
