import { combineReducers } from 'redux';

const booksListReducer = (bookList=[], action) => { // Reducer in charge of returning data to our store
  switch (action.type) {
    case 'FETCH_BOOKS':
      return action.payload.data.docs
    default:
      return bookList;
  }
}

export default combineReducers({
  bookList: booksListReducer 
})