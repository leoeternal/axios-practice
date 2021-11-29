import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../commom/apis/MovieApiKey";
import movieApi from "../../commom/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  selectedMovie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Fetched Successfully");
      return { ...state, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncMovieDetail.fulfilled]: (state, action) => {
      console.log("Fetched Successfully");
      return { ...state, selectedMovie: action.payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
