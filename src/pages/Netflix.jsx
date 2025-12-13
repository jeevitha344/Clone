import React, {  useEffect, useState } from 'react';
import { firebaseAuth } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';
import { image } from '../assets';
import TopNav from '../components/TopNav';
import Banner from '../components/Banner'
import Card from '../components/Card';
import {useDispatch} from 'react-redux'
// import { getGenres } from '../store/movieSlicer';
const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
const navigate =useNavigate()

// const dispatch=useDispatch()
// useEffect(()=>{
// dispatch(getGenres())
// },[])

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className="relative w-full h-[80vh] ">
      {/* Navigation */}
      <TopNav isScrolled={isScrolled} />

<Banner/>
<Card/>

       {/*Banner Image */}
      {/* <img

      
        // src={image.header_bg}

        // alt="hero"
        // className="w-full h-[90vh] object-cover object-top "
      />  */}

      {/* Content Overlay */}
     
       {/* <div className="absolute top-0 left-0 w-full h-[90vh]  bg-black/40  flex flex-col justify-center px-20 border   ">
        {/* <h1 className=" mt-30 text-6xl font-bold text-white mb-4">Stranger Things</h1> */}
        {/* <p className="text-white max-w-2xl mb-6">
          A quiet town trembled when shadows slipped from the woods. A group of
          friends followed the eerie glow, discovering a hidden doorway humming
          with danger  A quiet town trembled when shadows slipped from the woods. A group of
          friends followed the eerie glow, discovering a hidden doorway humming
          with danger .
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 font-semibold rounded hover:bg-gray-200 transition" 
          onClick={()=>navigate('/player')}
          >
            Play
          </button>
          <button className="bg-gray-700 text-white px-6 py-2 font-semibold rounded hover:bg-gray-600 transition">
            My List
          </button>
        </div> */}
      </div> 
    // </div>
  
  );


};

export default Netflix;
