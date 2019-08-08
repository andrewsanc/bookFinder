import React from 'react';
import { connect } from 'react-redux';
import BookCard from './BookCard'

const renderBookList = (bookList) => { // Function in charge of rendering our bookList
  return bookList.map((book, i) => {
    return (
      <BookCard
        key={i}
        title={book.title}
        author={book.author_name}
      />
    )
  })
}

const BookList = ({ bookList }) => {  // bookList component
  return (
    <div className="container" style={{ overflow: 'auto', height: '975px' }}>
      <div className="row">
        {renderBookList(bookList)}
      </div>
    </div>
  );
}

const mapStateToProps = ({ bookList }) => { // Retrieving data from our store
  return { bookList }
}
 
export default connect(mapStateToProps)(BookList);