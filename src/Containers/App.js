import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from '../Components/BookList';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <BookList />
      </div>
    )
  }
}

export default App;
