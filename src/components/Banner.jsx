import React, { useEffect, useState } from 'react'
import axios from '../helper/axios'
import requests from '../helper/request'

const Banner = () => {
        const[movie,setMovie]=useState(null);
        useEffect(()=>{
              const fetchData= async() => {
              const request = await axios.get(requests.fetchNetflixOriginals)
              console.log(request)
               const results = request.data?.results;
        if (!results || results.length === 0) return;
setMovie(
  request.data.results[
    Math.floor(Math.random() * request.data.results.length)
  ]
)
    return request;
};
fetchData();
},[])

console.log(movie)
 if (!movie?.backdrop_path) return null;
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}   alt={movie?.title}
  className="w-full h-[80vh] object-cover object-center " />

    </div>
    
  )
}

export default Banner

// import React, { useEffect, useState } from 'react';
// import axios from '../helper/axios';
// import requests from '../helper/request';

// const Banner = () => {
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const request = await axios.get(
//   `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/discover/tv?api_key=c21b5c0c86c68b30fa8ff36ebc89a331&with_networks=213`
// );


//         const results = request.data?.results || [];

//         if (results.length === 0) return;

//         const randomMovie =
//           results[Math.floor(Math.random() * results.length)];

//         setMovie(randomMovie);
//       } catch (error) {
//         console.error("Banner fetch error:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!movie) return null;

//   return (
//     <div>
//       <img
//         src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
//         alt={movie.name || movie.title}
//         className="w-full h-[60vh] object-cover"
//       />
//     </div>
//   );
// };

// export default Banner;


//kaggle data user here
// import React, { useEffect, useState } from "react";
// import movies from "../data/netflix_titles.json";
// import images from "../data/movies.json";

// const Banner = () => {
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * movies.length);
//     setMovie(movies[randomIndex]);
//   }, []);

//   if (!movie) return null;

//   return (
//     // 👇 THIS IS WHERE YOUR BACKGROUND IMAGE GOES
//     <div
//       className="relative w-full h-[60vh] text-white"
//       style={{
//         backgroundImage: {images.poster_url},
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-center h-full px-8">
//         <h1 className="text-4xl font-bold mb-4">
//           {movie.title}
//         </h1>

//         <p className="max-w-xl text-sm">
//           {movie.description}
//         </p>

//         <p className="mt-2 text-xs opacity-75">
//           {movie.country} • {movie.release_year}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Banner;


// import axios from "../helper/axios";
// import React, { useEffect, useState } from "react";
// import requests from "../helper/request";
// import movies from "../data/tmdb_5000_movies.json";


// const Banner = () => {
//   const [movie, setMovie] = useState([]);

//      useEffect(() => {
//     const randomMovie = movies[Math.floor(Math.random() * movies.length)];
//     setMovie(randomMovie);
//   }, []);
//   // console.log(movie);
//      if (!movie) return null;

//   const releaseYear = movie.release_date
//     ? new Date(movie.release_date).getFullYear()
//     : "N/A";

//   function truncate(string, n) {
//     return string?.length > n ? string.substr(0, n - 1) + "..." : string;
//   }

//   return (
//     <header
//       className="banner"
//       style={{
//         // backgroundImage: `url('https://i.imgur.com/g0jXdZC.jpg')`,
//         // backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
//         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path} ")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="banner__contents">

// <div className="absolute inset-0 bg-black/60" />
//      <div className="relative z-10 flex flex-col justify-center h-full px-8">
//          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
//          <p className="max-w-xl text-sm">{truncate(movie?.description,100)}</p>
//         <p className="mt-2 text-xs opacity-75">
//            {movie.country} • {movie.release_year}
//          </p>
      //  </div>

        {/* <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.description, 100)}
        </h1> */}
      {/* </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

 export default Banner; */}


// import React from 'react';
// import Banner from './Banner';
// import Row from './Row';
// import './App.css';

// function App() {
//   const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=1a7a9bd6";

//   return (
//     <div className="app" style={{ backgroundColor: '#111', minHeight: '100vh' }}>
//       <Banner fetchUrl={`?apikey=${apiKey}&s=Avengers&type=movie`} apiKey={apiKey} />

//       <Row
//         title="Trending Movies"
//         fetchUrl={`?apikey=${apiKey}&s=Avengers&type=movie`}
//       />
//       <Row
//         title="Popular Series"
//         fetchUrl={`?apikey=${apiKey}&s=Friends&type=series`}
//       />
//       <Row
//         title="Action Movies"
//         fetchUrl={`?apikey=${apiKey}&s=Batman&type=movie`}
//       />
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import axios from "../helper/axios";

// const Banner = () => {
//   const [movie, setMovie] = useState(null);
//   const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=1a7a9bd6"; // Replace with your OMDb key

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`?apikey=${apiKey}&s=Avengers&type=movie`);
//         const movies = response.data.Search;
//         setMovie(movies[Math.floor(Math.random() * movies.length)]);
        
//       } catch (error) {
//         console.error("Failed to fetch banner movie:", error);
//       }
//     };
//     fetchData();
//   }, [apiKey]);

//   return (
//     <header
//       className="relative h-[450px] text-white flex items-end bg-black bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${movie?.Poster !== "N/A" ? movie?.Poster : "https://via.placeholder.com/800x450"})`,
//       }}
//     >
//       <div className="p-8 max-w-xl">
//         <h1 className="text-4xl font-bold mb-2">{movie?.Title}</h1>
//         <p className="text-lg line-clamp-3">{movie?.Plot || "No description available"}</p>
//         <div className="mt-4">
//           <button className="bg-white text-black px-4 py-2 mr-2 font-semibold hover:bg-gray-200 transition">Play</button>
//           <button className="bg-gray-700 bg-opacity-70 px-4 py-2 font-semibold hover:bg-gray-600 transition">My List</button>
//         </div>
//       </div>
//       <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-black" />
//     </header>
//   );
// };

// export default Banner;


// import React, { useEffect, useState } from "react";
// import movies from "../data/netflix_titles.json";
// import images from "../data/movies.json";

// const Banner = () => {
//   const [movie, setMovie] = useState(null);
//   const [poster, setPoster] = useState("");

//   useEffect(() => {
//     // Pick a random movie for text/content
//     const randomMovieIndex = Math.floor(Math.random() * movies.length);
//     setMovie(movies[randomMovieIndex]);

//     // Pick a random poster from images dataset
//     const randomPosterIndex = Math.floor(Math.random() * images.length);
//     setPoster(images[randomPosterIndex].poster_url);
//   }, []);

//   if (!movie) return null;

//   return (
//     <div
//       className="relative w-full h-[60vh] text-white"
//       style={{
//         backgroundImage: `url(${poster})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/60" />
//       <div className="relative z-10 flex flex-col justify-center h-full px-8">
//         <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
//         <p className="max-w-xl text-sm">{movie.description}</p>
//         <p className="mt-2 text-xs opacity-75">
//           {movie.country} • {movie.release_year}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// import React, { useEffect, useState } from "react";
// import movies from "../data/tmdb_5000_movies.json";
// import images from "../data/movies.json";

// const Banner = () => {
//   const [movie, setMovie] = useState(null);
//   const [poster, setPoster] = useState("");

//   useEffect(() => {
//     // Pick a random movie for text/content
//     const randomMovieIndex = Math.floor(Math.random() * movies.length);
//     setMovie(movies[randomMovieIndex]);

//     // Pick a random poster from images dataset
//     const randomPosterIndex = Math.floor(Math.random() * images.length);
//     setPoster(images[randomPosterIndex].poster_url);
//   }, []);

//   if (!movie) return null;

//   return (
//    <header className="relative w-full h-[65vh] overflow-hidden bg-black text-white">

//   {/* Background blur layer */}
//   <img
//     src={poster}
//     alt="bg"
//     className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50"
//   />

//   {/* Dark overlay */}
//   <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

//   {/* Foreground content */}
//   <div className="relative z-10 flex items-center h-full px-12 gap-8">

//     {/* Main poster (FULL, no crop) */}
//     <img
//       src={poster}
//       alt="poster"
//       className="h-[80%] object-contain rounded-lg shadow-2xl"
//     />

//     {/* Text */}
//     <div className="max-w-xl">
//       <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
//       <p className="text-sm mb-3">{movie.description}</p>
//       <p className="text-xs opacity-70">
//         {movie.country} • {movie.release_year}
//       </p>
//     </div>
//   </div>
// </header>


//   );
// };

// export default Banner;

// import React from 'react'
// import { image } from '../assets'

// const BackgroundImage = () => {
//   return (
//     <div className='w-full h-screen'>
//       <img src={image.header_bg} alt="" className=' w-full h-full object-cover ' />

//     </div>
//   )
// }





// import React, { useEffect, useState} from "react";
// import movies from "../data/netflix_titles.json";
// import { useNavigate } from 'react-router-dom';

//  const Banner = () => {
//    const [movie, setMovie] = useState(null);
//    const navigate = useNavigate()
//    useEffect(() => {
//      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
//      setMovie(randomMovie);
//    }, []);

//    if (!movie) return null;

//    const releaseYear = movie.release_year
//      ? new Date(movie.release_year).getFullYear()
//      : "N/A";
//        function truncate(string, n) {
//   return string?.length > n ? string.substr(0, n - 1) + "..." : string;
//    }

//    return (
//      <header className="relative w-full h-full bg-black text-white">
//        {/* Background */}

  
//       {/* <img src={image.header_bg} alt="" className='  ' /> */}

   
//       <img
//                src={image.header_bg}// use poster_path or your image URL
//      alt={movie.title}
//          className=" absolute inset-0 w-full h-full object-top object-cover opacity-50"
//        />

//        {/* Content */}
//        <div className=" relative z-5 flex items-center h-full px-8 gap-6 left-12">
//          {/* <img
//            src={movie.poster_path}
//            alt={movie.title}
//            className="h-[80%] object-contain rounded-lg shadow-2xl"
//          /> */}
//          <div>
//            <h1 className="text-3xl font-bold mb-2 mt-20">{movie.title}</h1>
//            <p className="text-sm mb-1">{truncate(movie?.description,70)}</p>
//            <p className="text-xs opacity-70">{releaseYear}</p>
//  <div className="banner__buttons mt-6 ">
//                <button  onClick={()=>navigate('/player')} className="bg-white text-black px-4 py-2 mr-5 font-semibold hover:bg-gray-200 transition rounded">Play</button>
//         <button className="bg-gray-700 bg-opacity-70 px-4 py-2 font-semibold hover:bg-gray-600 transition rounded">My List</button>
//         </div>
//          </div>
//        </div>
//      </header>
//    );
//  };

//  export default Banner;

