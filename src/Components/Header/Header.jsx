import React, { useState } from 'react'
import { images } from '../../assets/Images/Images'
import { CiLight } from "react-icons/ci";

export default function Header() {
    const [openMenu , setOpenMenu] = useState(false)
    const handleOpenMenu =()=>{
        setOpenMenu(!openMenu)
    }
    return (
        <div>
            <div className=' flex justify-between items-center p-4 max-w-[1200px] mx-auto'>
                <img className='w-20' src={images.mainLogo} alt="..." />
                <img onClick={handleOpenMenu} className='w-10 block  md:hidden cursor-pointer' src={openMenu ?images.closeBtn:images.mobMenu} alt="..." />
                <div className='hidden md:flex items-center gap-8'>
                    <ul className='flex gap-4 text-base  text-gray-600'>
                        <li >About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                    <div className='flex items-center gap-3'>
                        <CiLight className='text-2xl' />
                        <div className='bg-gray-900 text-gray-50 py-1 px-4 rounded-xl'>Downoad CV</div>
                    </div>
                </div>
            </div>
            {openMenu && (
            <div  className={`transform transition-all duration-300 ease-in-out 
                ${openMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden md:hidden`}>
                <ul className='text-xl  text-gray-600 border-y-2 border-gray-100 mb-4'>
                    <li className='py-2 px-4'>About</li>
                    <li className='py-2 px-4'>Skills</li>
                    <li className='py-2 px-4'>Projects</li>
                    <li className='py-2 px-4'>Contact</li>
                </ul>
                <div className='px-4'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className=' text-xl text-gray-600'>
                            Switch Theme
                        </div>
                        <CiLight className='text-2xl' />
                    </div>
                    <div className='bg-gray-900 text-gray-50 py-2  px-4 rounded-xl text-center'>Downoad CV</div>
                </div>
            </div>
            )}
        </div>
    )
}
