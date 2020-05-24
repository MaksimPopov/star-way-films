import api from "../../config/api";

export const getSearch = (query) => {
  return async (dispatch) => {
    dispatch({ type: "SEARCH_LOADING" });
    try {
      const { data, status } = await api.search(query);
      if (status > 199 && status < 300) {
        dispatch({ type: "SEARCH_SUCCESS", data });
      }
    } catch (e) {
      console.error(e);
      dispatch({ type: "SEARCH_FAILURE" });
    }
  };
};
