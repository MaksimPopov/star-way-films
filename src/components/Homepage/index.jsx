import React from "react";

const Homepage = () => {
  const handleFocus = () => document.getElementById("search").focus();

  return (
    <main className="container flex-column">
      <section className="info-container">
        <h1>Movie Finder.</h1>
        <p>Easy. Fast. Intuitive way to discover the world of cinematography</p>
        <button onClick={() => handleFocus()}>Try now</button>
      </section>
    </main>
  );
};

export default Homepage;
