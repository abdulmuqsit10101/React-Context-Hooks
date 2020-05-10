import React, {useState, useContext} from "react";
import {BookContext} from '../context/BookContext.js';

function BookForm() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const {addToBooks} = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addToBooks(title, author);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
      </div>
      <div>
        <label>Author</label>
        <input placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author}/>
      </div>
      <button>Add New</button>
    </form>
  )
}

export default BookForm;
