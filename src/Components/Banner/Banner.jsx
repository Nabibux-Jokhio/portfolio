import React from 'react'
import { images } from '../../assets/Images/Images'
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { LuGithub } from "react-icons/lu";



export default function Banner() {

  return (
    <div >
      <div className='max-w-[1200px] mx-auto  flex flex-col-reverse items-center md:flex-row md:justify-between   '>
        <div className=' w-full h-[70vh] md:h-screen  md:w-[60%] flex flex-col items-center md:items-start justify-center ' >
          <h1 className='text-3xl md:text-5xl font-bold mb-4 text-center md:text-start text-gray-900'>Hi,I’m Nabi Bux </h1>
          <p className='text-gray-600 text-center md:text-start'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p> 
          <div className='flex gap-4 mt-10  text-gray-900 '>
            <CiLinkedin size={32}  className='hover:text-gray-600 cursor-pointer'/>
            <SiGmail size={32} className='hover:text-gray-600 cursor-pointer' />
            <LuGithub  size={32} className='hover:text-gray-600 cursor-pointer'/>
          </div>
        </div>
        <div className='w-full md:w-[40%] h-[70vh]  md:h-screen flex justify-center items-center '>
          <div className='bg-gray-200  w-[275px] h-[300px] md:w-[250px]  md:h-[300px] relative'>
            <img className='w-[250px] h-[300px] absolute left-3 bottom-5 md:right-6 md:bottom-6 shadow-white-xl border-white border-4' src={images.dummtImg} alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}
