const initialState = { loading: false, data: [] };

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_LOADING":
      return { ...state, loading: true, error: false };
    case "SEARCH_SUCCESS":
      return { ...state, loading: false, data: action.data };
    case "SEARCH_FAILURE":
      return initialState;
    default:
      return state;
  }
};
