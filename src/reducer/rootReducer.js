import { combineReducers } from "redux";
import { searchReducer } from "../components/Header/header.reducer";
import { movieReducer } from "../components/MoviePage/moviepage.reducer";

const reducers = combineReducers({
  search: searchReducer,
  movie: movieReducer,
});

export default reducers;
