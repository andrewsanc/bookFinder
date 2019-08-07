import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from '../Components/BookList';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
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
        <BookList bookList={this.props.bookList} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList
  }
}

export default connect(mapStateToProps)(App);
