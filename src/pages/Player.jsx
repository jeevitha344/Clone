// import React from 'react'
// import {BsArrowLeft} from 'react-icons/bs'
// import { useNavigate } from 'react-router-dom';
// const Player = () => {
//   const navigate = useNavigate()
//   return (
   
//       <div className='playercontainer w-full h-full'>
// <div>
//   <div  className='absolute p-4 z-1'>
//     <BsArrowLeft onClick={()=>navigate('/')} className='cursor-pointer text-lg text-white'/>
//   </div>
//   <iframe src="https://www.youtube.com/embed/PssKpzB0Ah0?si=0wPbD-kfpMWzBYmM"  autoPlay loop controls  className='w-full h-screen'></iframe>'
// </div>
//       </div>
  
//   )
// }

// export default Player

import { useSelector } from "react-redux";

const Player = () => {
  const movie = useSelector(
    (state) => state.movies.selectedMovie
  );

  if (!movie) return <h1>No movie selected</h1>;

  return (
    <div className="p-6 text-white bg-black h-screen">
      <h1 className="text-3xl">{movie.title}</h1>
      <p className="mt-3">{movie.plot}</p>
      <p className="mt-2 text-sm">⭐ {movie.rating}</p>
    </div>
  );
};

export default Player;
