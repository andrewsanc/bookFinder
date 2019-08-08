import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions';

class SearchBar extends Component { // Component in charge of rendering our SearchBar
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchBooks(this.state.term);
  }

  render() { 
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <h5>Book Search</h5>
          <div className="input-field">
            <input onChange={(e) => this.setState({ term: e.target.value.toLowerCase()})} 
                   type="text"/>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => { // Brings in our fetchBooks action
  return bindActionCreators({ fetchBooks }, dispatch);
}
 
export default connect(null, mapDispatchToProps)(SearchBar);