// import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { MY_API_KEY, TMDB_BASE_URL } from "../constant";

// /* ---------------- INITIAL STATE ---------------- */

// const initialState = {
//   movies: [],
//   genresLoaded: false,
//   genres: [],
// };

// /* ---------------- FETCH GENRES ---------------- */

// export const getGenres = createAsyncThunk(
//   "netflix/genres",
//   async () => {
//     const {data:{genres},}= await axios.get(
//       `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
//     );
//  console.log(genres)
//     return genres; // ✅ IMPORTANT
   
//   }
// );


// /* ---------------- SLICE ---------------- */

// const NetflixSlice = createSlice({
//   name: "Netflix",
//   initialState,
//   reducers: {},

//   extraReducers: (builder) => {
//     builder.addCase(getGenres.fulfilled, (state, action) => {
//       state.genres = action.payload;
//       state.genresLoaded = true;
//     });
//   },
// });

// /* ---------------- STORE ---------------- */

// export const store = configureStore({
//   reducer: {
//     netflix: NetflixSlice.reducer,
//   },
// });

import { createSlice } from "@reduxjs/toolkit";
import data from "../data/netflix_list.json";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: data,     // FULL kaggle data
    selectedMovie: null // when user clicks
  },
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    }
  }
});

export const { selectMovie } = movieSlice.actions;
export default movieSlice.reducer;
