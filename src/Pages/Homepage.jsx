import React from 'react'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import BlogSection from '../Components/BlogSection'
import ServiceSection from '../Components/ServiceSection'
import Header from '../Components/Header'
import AboutCompany from '../Components/Frontend/AboutUs/AboutCompany'
import Testimonial from '../Components/Testimonial'
import TeamSection from '../Components/TeamSection'
import PlumberPoints from '../Components/PlumberPoints'
import OurCompany from '../Components/OurCompany'

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
      </div>

    </>
  )
}

export default Homepage
