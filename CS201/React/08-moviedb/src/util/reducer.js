export const reducer = (state, action) => {
  switch (action, type) {
    case 'SET_LOADING': {
      return { ...state, laoding: true }
    }
    case 'SET_HITS': {
      return {
        ...state,
        loading: false,
        nbPages: action.payload.nbPages,
        hits: action.payload.hits
      }
    }
    case 'REMOVE_ARTICLE': {
      const newHits = state.hits.filter(hit => hit.id !== action.payload);
      return {
        ...state,
        hits: newHits
      }
    }
  }
}