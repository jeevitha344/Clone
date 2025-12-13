// const API_KEY = "c21b5c0c86c68b30fa8ff36ebc89a331"

// export default{
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//      fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//       fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//        fetchTrending: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//         fetchTrending: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//          fetchTrending: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//           fetchTrending: `/discover/movie?api_key=${API_KEY}&lwith_networks=213`,
//            fetchTrending: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// }

const API_KEY = "c21b5c0c86c68b30fa8ff36ebc89a331";

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US&region=US`,
  fetchNetflixOriginals: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// export default requests;


// const API_KEY = "YOUR_TMDB_API_KEY";

// const requests = {
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
// };

// export default requests;


// const API_KEY = "97458827f910bcb9b6f683ff63c39c5d";

// export default {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// };