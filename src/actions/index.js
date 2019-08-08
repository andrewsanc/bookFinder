import axios from 'axios';
const ROOT_URL = 'http://openlibrary.org/search.json?';

// Action creator to fetch data from OpenLibrary api
export const fetchBooks = (term) => {
  const request = axios.get(ROOT_URL, {
    params: {
      q: term
    }
  })

  return {
    type: 'FETCH_BOOKS',
    payload: request
  }
}
