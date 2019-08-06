import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookList: []
    }
  }

  onSearchSubmit = (term) => {
    axios.get('http://openlibrary.org/search.json?', {
      params: {
        q: term
      }
    })
      .then(res => this.setState({ bookList: res.data.docs }))
      .catch(err => console.log(err))
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
