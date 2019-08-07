// Action creator for search term
export const searchTerm = (term) => {
  return {
    type: 'SEARCH_TERM',
    payload: term
  }
}
