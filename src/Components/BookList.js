import React from 'react';
import BookCard from './BookCard'

const renderBookList = (bookList) => {
  return bookList.map(book => {
    return (
      <BookCard 
        key={book.cover_edition_key}
        title={book.title}
        author={book.author_name}
        publishDate={book.publish_date}
        editionCount={book.edition_count}
      />
    )
  })
}

const BookList = ({ bookList }) => {
  return (
    <div className="container">
      {renderBookList(bookList)}
    </div>
  );
}
 
export default BookList;