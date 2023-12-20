import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./heart.styles.css";
import { FavContext } from "../../context/fav-movies/fav-movies.context";

const Heart = ({ movie }) => {
  const { favs, add, remove } = useContext(FavContext);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFav = () => {
    if (!isFavorited) {
      add(movie);
    } else {
      remove(movie);
    }
  };

  useEffect(() => {
    setIsFavorited(favs.some((fav) => fav.id === movie.id));
  }, [favs, movie]);

  return (
    <div className={`heart-container ${isFavorited ? "favorited" : ""}`} onClick={toggleFav}>
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};

export default Heart;

