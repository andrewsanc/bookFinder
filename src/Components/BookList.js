import React from 'react';
import BookCard from './BookCard'

const renderBookList = (bookList) => {
  return bookList.map(book => {
    return (
      <BookCard
        key={book.cover_edition_key}
        title={book.title}
        author={book.author_name}
      />
    )
  })
}

const BookList = ({ bookList }) => {
  return (
    <div className="container">
      <div className="row">
        {renderBookList(bookList)}
      </div>
    </div>
  );
}
 
export default BookList;