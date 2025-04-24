import React from 'react'
import AboutPageTitle from '../Components/AboutPageTitle'
import AboutPageText from '../Components/AboutPageText'
import ServiceSection from '../Components/ServiceSection'
import TeamSection from '../Components/TeamSection'
import Testimonial from '../Components/Testimonial'
import BlogSection from '../Components/BlogSection'
import AboutService from '../Components/AboutService'

const AboutUs = () => {
  return (
    <div>
      <AboutPageTitle />
      <AboutPageText />
      <AboutService />
      <TeamSection />
      <Testimonial />
      <BlogSection />
      
    </div>
  )
}

export default AboutUs