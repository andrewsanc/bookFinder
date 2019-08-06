import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    }
  }

  onSearchSubmit = (term) => {
    console.log(term);
  }
  
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;
