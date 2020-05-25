const initialState = { loading: false, data: [] };

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_LOADING":
      return { ...state, loading: true };
    case "GET_MOVIE_SUCCESS":
      return { ...state, loading: false, data: action.data };
    case "GET_MOVIE_FAILURE":
      return { ...initialState, error: action.error };
    default:
      return state;
  }
};
