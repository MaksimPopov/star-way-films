import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useClickedOutside } from "../../../utils";
import { getSearch } from "../header.action";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setFocus] = useState(false);

  const results = useSelector((state) => state.search);

  const history = useHistory();
  const ref = useRef();
  const dispatch = useDispatch();

  useClickedOutside(ref, () => {
    if (isFocused) {
      setFocus(false);
    }
  });

  const handleSearch = (e) => {
    setQuery(e);
    if (e) {
      dispatch(getSearch(e));
    }
  };

  const handleClick = (id) => {
    setFocus(false);
    history.push(`/movie/${id}`);
  };

  const renderResults = () => {
    return results.data.total_results > 0 ? (
      results.data.results.map((item) => {
        return (
          <div
            className="search-item flex"
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            {item.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="poster"
              />
            )}
            <p className="title">{item.title}</p>
          </div>
        );
      })
    ) : (
      <div className="search-item flex">
        <p className="title">No matches has been found</p>
      </div>
    );
  };

  return (
    <div className="search-bar flex" ref={ref}>
      <input
        type="text"
        name="movie-search"
        id="search"
        value={query}
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setFocus(true)}
        autoComplete="off"
      />
      {query.length > 0 && (
        <div
          className={`dropdown-container flex-column ${
            isFocused ? "" : "hidden"
          }`}
        >
          {renderResults()}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
