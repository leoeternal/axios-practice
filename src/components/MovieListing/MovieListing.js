import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css";

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <h3>{movies.Error}</h3>
    );
  return <div>{renderMovies}</div>;
};

export default MovieListing;
