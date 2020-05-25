import api from "../../config/api";

export const getMovieData = (id) => {
  return async (dispatch) => {
    dispatch({ type: "GET_MOVIE_LOADING" });
    try {
      const { data, status } = await api.getMovie(id);
      if (status > 199 && status < 300) {
        dispatch({ type: "GET_MOVIE_SUCCESS", data });
      }
    } catch (e) {
      dispatch({
        type: "GET_MOVIE_FAILURE",
        error: e.response.data.status_message,
      });
      console.error(e);
    }
  };
};
