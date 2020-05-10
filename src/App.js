import React from 'react';
import Navbar from './components/Navbar.js';
import BookContextProvider from './context/BookContext.js';
import './App.css';
import BookList from './components/BookList.js';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
      </BookContextProvider>
    </div>
  );
}

export default App;

