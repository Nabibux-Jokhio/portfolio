import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import AboutMe from '../Components/AboutMe/AboutMe'
import MySkill from '../Components/MySkils/MySkill'
import { skillsData } from '../utils/Constant/ConstantData'



export default function LandingPage() {
  return (
    <>
     <Header/>  
     <Banner/>
     <AboutMe/>
     <MySkill data={skillsData}/>
     {/* <Footer/>    */}
    </>
  )
}
