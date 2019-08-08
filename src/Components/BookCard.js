// File is in charge of rendering individual cards w/ conditional rendering on line 12.
import React from 'react';

const BookCard = ({ title, author }) => {
  return (
    <div className="col s6 m3" >
      <div className="card small teal">
        <div className="card-content">
          <span className="white-text"><strong>Title:</strong> {title}</span>
          <br />
          <br />
          {author && <span className="white-text"><strong>by</strong> {author}</span>}
        </div>
      </div>
    </div>
  );
}
 
export default BookCard;