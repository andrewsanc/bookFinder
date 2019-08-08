import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from '../Components/BookList';

const backgroundUrl = 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
const style = { 
  height: '100vh', 
  backgroundPosition: 'top', 
  backgroundImage: `url(${backgroundUrl})`,
  backgroundSize: 'cover'
}

class App extends Component {
  render() {
    return (
      <div style={style}>
        <SearchBar />
        <BookList />
      </div>
    )
  }
}

export default App;
