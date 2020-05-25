import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovieData } from "./moviepage.action";

const MoviePage = ({ match }) => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  const { data } = movie;

  useEffect(() => {
    if (match.params.id) {
      dispatch(getMovieData(match.params.id));
    }
  }, [dispatch, match.params.id]);

  return (
    <section className="container">
      {movie.loading ? (
        <div>Loading ...</div>
      ) : movie.error ? (
        <div>{movie.error}</div>
      ) : (
        <div className="movie-wrapper flex">
          {data.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt="poster"
            />
          )}
          <div className="movie-info flex-column">
            <h1>{data.title}</h1>
            {data.tagline && <span className="tagline">"{data.tagline}"</span>}
            <p>Released: {data.release_date}</p>
            <p>
              Genres:{" "}
              {data.genres &&
                data.genres.map((item, i) =>
                  i < data.genres.length - 1 ? `${item.name}, ` : item.name
                )}
            </p>
            <p>Runtime: {data.runtime} min</p>
            <p className="overview">{data.overview}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MoviePage;
