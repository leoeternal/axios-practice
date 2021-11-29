import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchAsyncMovieDetail } from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.selectedMovie);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID));
  }, [dispatch, imdbID]);

  return <div>{data.Title}</div>;
};

export default MovieDetail;
