import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { image } from '../assets'
const Header = (props) => {
 const navigate= useNavigate()
  return (
    <div  className='flex justify-between items-center p-4 '>
      <div>
        <img src={image.logo} alt="no internet connection"  className='h-12 cursor-pointer' />
      </div>
      <button onClick={()=>navigate(props.login ? '/login': '/signin')} className='py-2 px-4 bg-red-500  cursor-pointer text-white font-bold border rounded border-none'>
{props.login ? 'Log In' : 'Sign In'}
      </button>
    </div>
  )
}

export default Header
