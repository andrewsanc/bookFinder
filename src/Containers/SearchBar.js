import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() { 
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <h5>Book Search</h5>
          <div className="input-field">
            <input onChange={(e) => this.setState({ term: e.target.value.toLowerCase( )})} 
                   type="text"/>
          </div>
        </form>
      </div>
    );
  }
}
 
export default SearchBar;