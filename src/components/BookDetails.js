import React from 'react';

function BookDetails({book}) {
  const { title, author } = book;
  return (
    <li className="list-item">
      <div>{title}</div>
      <div>{author}</div>
    </li>
  )
}

export default BookDetails;
