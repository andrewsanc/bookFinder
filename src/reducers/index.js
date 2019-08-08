import { combineReducers } from 'redux';

// Book List reducer loaded with dummy data
const booksListReducer = (bookList=[], action) => {
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