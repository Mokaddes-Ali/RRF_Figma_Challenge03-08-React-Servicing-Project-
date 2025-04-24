import React from 'react'
import HeroSection from '../Components/Frontend/Home/HeroSection'
import Footer from '../Components/Frontend/Home/Footer'
import BlogSection from '../Components/Frontend/Home/BlogSection'
import ServiceSection from '../Components/Frontend/Home/ServiceSection'
import AboutCompany from '../Components/Frontend/AboutUs/AboutCompany'
import Testimonial from '../Components/Frontend/Home/Testimonial'
import TeamSection from '../Components/Frontend/Home/TeamSection'
import PlumberPoints from '../Components/Frontend/Home/PlumberPoints'
import OurCompany from '../Components/Frontend/Home/OurCompany'

const Homepage = () => {
  return (
    <>

      <div className="">
        <HeroSection />
        <ServiceSection />
        <AboutCompany />
        <OurCompany />
        <PlumberPoints />
        <TeamSection />
        <Testimonial />
        <BlogSection />
        <Footer />
      </div>

    </>
  )
}

export default Homepage
