import React from 'react'
import { images } from '../../assets/Images/Images'

export default function AboutMe() {
  return (
    <div className='bg-slate-50 pt-10'>
      <div className='bg-gray-200 px-2 py-2 text-lg font-semibold text-gray-600 mx-auto mb-10 w-[100px] rounded-2xl ' >
        About me
      </div>
      <div className='max-w-[1200px] mx-auto  flex flex-col items-center md:flex-row md:justify-between   '>
        <div className='w-full md:w-[40%] h-[70vh]  md:h-screen flex justify-center items-center '>
          <div className='bg-gray-200  w-[275px] h-[300px] md:w-[250px]  md:h-[300px] relative'>
            <img className='w-[250px] h-[300px] absolute left-3 bottom-5 md:right-6 md:bottom-6 shadow-white-xl border-white border-4' src={images.dummtImg} alt="..." />
          </div>
        </div>
        <div className=' w-full h-[70vh] md:h-screen  md:w-[60%] ' >
          <h1 className='text-2xl md:text-3xl mb-4 text-gray-900 text-center md:text-start'>Curious about me? Here you have it: </h1>
          <p className='text-gray-600 text-center md:text-start'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
          <div className='flex gap-4 mt-10  text-gray-900 '>
          </div>
        </div>
      </div>
    </div>
  )
}
