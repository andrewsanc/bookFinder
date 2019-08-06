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
    console.log(e.target.value)
  }

  render() { 
    return (
      <div className="container">
        <form>
          <h5>Book Search</h5>
          <div className="input-field">
            <input onChange={(e) => this.onFormSubmit(e)} type="text"/>
          </div>
        </form>
      </div>
    );
  }
}
 
export default SearchBar;