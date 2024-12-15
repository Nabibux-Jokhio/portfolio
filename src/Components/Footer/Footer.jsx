import React from 'react'
import { images } from '../../assets/Images/Images'

export default function Footer() {
  return (
    <div className='bg-primaryColor my-10 py-4 px-8 flex justify-between items-center'>
      <div><img className='w-20 md:w-40' src={images.footerLogo} alt="" /></div>
      <div className='text-white'>2024</div>
    </div>
  )
}
