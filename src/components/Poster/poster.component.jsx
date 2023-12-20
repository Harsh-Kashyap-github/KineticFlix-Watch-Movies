import React from "react";
import "./poster.styles.css";

const Poster = ({ imgUrl }) => {
  return (
    <div className="poster-container">
      <div className="poster-text">
        <h1>
          KineticFlix
          <br />
          <span className="sub-text">Discover the Magic of Movies</span>
        </h1>
      </div>
    </div>
  );
};

export default Poster;