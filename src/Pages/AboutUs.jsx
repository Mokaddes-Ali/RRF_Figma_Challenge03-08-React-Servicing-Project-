import React from 'react'
import AboutPageTitle from '../Components/Frontend/AboutUs/AboutPageTitle'
import AboutPageText from '../Components/Frontend/AboutUs/AboutPageText'
import AboutService from '../Components/Frontend/AboutUs/AboutService'
import TeamSection from '../Components/Frontend/Home/TeamSection'
import Testimonial from '../Components/Frontend/Home/Testimonial'
import Footer from '../Components/Frontend/Home/Footer'
import BlogSection from '../Components/Frontend/Home/BlogSection'


const AboutUs = () => {
  return (
    <div>
      <AboutPageTitle />
      <AboutPageText />
      <AboutService />
      <TeamSection />
      <div className="-mt-3">
      <Testimonial />
      </div>
      <BlogSection />
      <div className="-mt-3">
        <Footer />
        </div>
      
    </div>
  )
}

export default AboutUs