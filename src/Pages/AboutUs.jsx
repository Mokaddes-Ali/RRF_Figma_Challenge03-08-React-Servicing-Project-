import React from 'react'
import AboutPageTitle from '../Components/Frontend/AboutUs/AboutPageTitle'
import AboutPageText from '../Components/Frontend/AboutUs/AboutPageText'
import AboutService from '../Components/Frontend/AboutUs/AboutService'
import TeamSection from '../Components/TeamSection'
import Testimonial from '../Components/Testimonial'


const AboutUs = () => {
  return (
    <div>
      <AboutPageTitle />
      <AboutPageText />
      <AboutService />
      <TeamSection />
      <Testimonial />
      
    </div>
  )
}

export default AboutUs