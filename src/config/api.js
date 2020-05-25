import axios from "axios";

const api_key = "d529585523551860836c82bce339e830";

export default {
  search: (query) =>
    axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        api_key +
        "&query=" +
        query
    ),
  getMovie: (id) =>
    axios.get(
      "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key
    ),
};
