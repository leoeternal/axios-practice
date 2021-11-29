import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  return (
    <div className="moviecard-box">
      <Link to={`/movie/${props.data.imdbID}`}>
        <h3>{props.data.Title}</h3>
      </Link>
    </div>
  );
};
export default MovieCard;
