// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import images from "../data/netflix_list.json";
// import { useEffect } from 'react';
// import {IoPlayCircleSharp} from 'react-icons/io5'
// import { AiOutlinePlus } from 'react-icons/ai';
// import {RiThumbUpFill,RiThumbDownFill} from 'react-icons/ri';
// import {BiChevronDown} from 'react-icons/bi';
// import{BsCheck} from 'react-icons/bs'
// const Card = () => {
 
//    const [onhovered,setOnHovered]=useState(false)
//    const [poster, setPoster] = useState("");
//    const navigate=useNavigate()
//      useEffect(() => {
//      // Pick a random poster from images dataset
//    const randomPosterIndex = Math.floor(Math.random() * images.length);
//    setPoster(images[randomPosterIndex].image_url);
//   }, []);
//   return (

   

//     <div className='w-[250px] h-[150px] bg-red-600 relative cursor-pointer ' onMouseEnter={() => setOnHovered(true)}
//     onMouseLeave={() => setOnHovered(false)}
//     >
//      <img
//       src={poster}
//        alt="poster"
//        className=" object-contain shadow-2xl w-full h-screen radius-2 z-10 "
//        onClick={()=>navigate('/player')}
//      />
//      {onhovered && (
//        <div className='hover -z-40  w-2 absolute top-[-18v] bg-[#181818] transition-3s ease-in '>
     
// <div className='image-video-wrapper relative'>
//  <img
//       src={poster}
//        alt="poster"
//        className=" object-cover rounded-lg shadow-2xl w-[250px] h-[150px]  top-0 z-2 absolute"
//        onClick={()=>navigate('/player')}
//      />

// <iframe
//   className="w-full h-[200px]"
//   src="https://www.youtube.com/embed/iKZyYdwS3Wg?autoplay=1&mute=1&controls=1&rel=0"
//   title="YouTube video player"
//   frameBorder="0"
//   allow="autoplay; encrypted-media; fullscreen"
//   allowFullScreen
// />
//       </div>


//       <div className='info-container'>
//         <h3 className='move name' onClick={()=>navigate('/player')}>Red Notice</h3>
// <div className='icons'>
// <div className='controls'>
// <IoPlayCircleSharp
// title='play'
// onClick={()=>navigate('/player')}
// />
// <RiThumbUpFill title='like'/>
// <RiThumbDownFill title='Dislike'/>
// <BsCheck title='Remove from list'/>
// <AiOutlinePlus title='Add to my List'/>

// </div>
// <div className='info'>
// <BiChevronDown title='More Info'/>
// </div>
// </div>

// <div className='genre'>
// <ul>
//   <li>Action</li>
//   <li>Action</li>
//   <li>Action</li>
//   <li>Action</li>
// </ul>
// </div>

//       </div>
//    </div>



    
//      )
   
//      }
//     </div>  
//   )
// }

// export default Card
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import images from "../data/netflix_list.json";
import movies from "../data/netflix_titles.json";

import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";

const Card = () => {
//   const [isHovered, setIsHovered] = useState(false);
//     const [movie, setMovie] = useState(null);
//   const [poster, setPoster] = useState("");
//   const navigate = useNavigate();
//  useEffect(() => {
//      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
//      setMovie(randomMovie);
//    }, []);
//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * images.length);
//     setPoster(images[randomIndex]?.image_url);
//   }, []);

//    if (!movie) return null;
//   return (
//     <div
//       className="relative w-60 h-[140px] cursor-pointer transition-all duration-300 border"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Normal Card */}
//       {!isHovered && (
//         <img
//           src={poster}
//           alt="movie poster"
//           className="w-full h-full object-cover rounded-md"
//         />
//       )}

//       {/* Hover Expanded Card */}
//       {isHovered && (
//         <div className="absolute -top-20 left-0 w-[300px] bg-[#181818] rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 scale-105">
          
//           {/* Trailer */}
//           <div className="relative h-[170px]">
//             {/* <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/iKZyYdwS3Wg?autoplay=1&mute=1&controls=0&rel=0"
//               title="YouTube trailer"
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             /> */}
//              <img
//           src={poster}
//           alt="movie poster"
//           className="w-full h-full object-cover rounded-md"
//         />
//           </div>

//           {/* Info */}
//           <div className="p-3 text-white">
//             {/* Controls */}
//             <div className="flex items-center justify-between mb-2">
//               <div className="flex gap-3 text-xl">
//                 <IoPlayCircleSharp
//                   className="hover:text-gray-300"
//                   onClick={() => navigate("/player")}
//                 />
//                 <AiOutlinePlus className="hover:text-gray-300" />
//                 <RiThumbUpFill className="hover:text-gray-300" />
//               </div>
//               <BiChevronDown className="text-2xl hover:text-gray-300" />
//             </div>

//             {/* Title */}
//             <h3
//               className="text-sm font-semibold mb-1"
//               onClick={() => navigate("/player")}
//             >
//              {movie.title}
//             </h3>

//             {/* Genres */}
//             <ul className="flex gap-2 text-xs text-gray-400">
//               <li>Action</li>
//               <li>Thriller</li>
//               <li>Adventure</li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
  // );
};

export default Card;
