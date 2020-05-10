import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import BookContextProvider from './context/BookContext.js';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
      </BookContextProvider>
    </div>
  );
}

export default App;
