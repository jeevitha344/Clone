import React from 'react'
import { image } from '../assets'

const BackgroundImage = () => {
  return (
    <div className='w-full h-screen'>
      <img src={image.banner_bg} alt="" className=' w-full h-full object-cover ' />

    </div>
  )
}

export default BackgroundImage
