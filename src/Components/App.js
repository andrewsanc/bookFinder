import React from 'react';
import SearchBar from '../Containers/SearchBar';
import BookList from './BookList';

const backgroundUrl = 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
const style = { 
  height: '100vh', 
  backgroundPosition: 'top', 
  backgroundImage: `url(${backgroundUrl})`,
  backgroundSize: 'cover'
}

const App = () => { // Functional component in charge of rendering our application
  return (
    <div style={style}>
      <SearchBar />
      <BookList />
    </div>
  );
}

export default App;
