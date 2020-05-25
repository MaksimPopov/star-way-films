import React from "react";

import Searchbar from "./SearchBar";

const Header = () => {
  return (
    <header className="flex">
      <a href="/" className="logo">Star Way Films</a>
      <Searchbar />
    </header>
  );
};

export default Header;
