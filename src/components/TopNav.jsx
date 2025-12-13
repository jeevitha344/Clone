import React from 'react'
import {AiOutlineLogout} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import { firebaseAuth } from '../firebase/firebase-config'
import {onAuthStateChanged,signOut } from 'firebase/auth'
import { image } from '../assets'
import { useState } from 'react'
const TopNav = () => {
    const navigate= useNavigate();

  const[isScrolled,setIsScrolled]=useState(false)
    window.onscroll =()=>{
      setIsScrolled(window.pageYOffset === 0 ? false : true)
      return ()=>(window.onscroll=null)
    }
    console.log(isScrolled)
    const navlinks=[
        {name:'Home',link:'/'},
        {name:'Tv Show',link:'/tvshow'},
        {name:'My List',link:'/player'},
        {name:'Movies',link:'/moviepage'},
    ]

onAuthStateChanged(firebaseAuth,(currentUser)=>{
     if(!currentUser) navigate('/login')// if not current user it while navigate to login page 
})

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black" :" bg-transparent"} ` }
    >
        <div className='flex justify-between items-center h-20 w-full  p-5  '>
      <div className='leftside flex items-center gap-8 ml-10'>
<div className='logo flex  justify-center items-center '>
<img src={image.logo} alt="logo"  className='w-40 h-8 object-contain'  />
</div>
<ul className='links flex gap-12'>
{
    navlinks.map(({name,link})=>{
        return(
            <li key={name}>
              
<Link to={link} className='text-white'>{name}</Link>
            </li>
        )
    })
}
</ul>
      </div>

      <div className='rightside flex items-center gap-4 '>
<button className='border-none cursor-pointer text-white '>
    <img src={image.avatar} alt="" onClick={() => signOut(firebaseAuth)} className='mr-5  w-[30px] ' /> 
</button>

      </div>
     
 </div>
  </div>

  )
}



export default TopNav
