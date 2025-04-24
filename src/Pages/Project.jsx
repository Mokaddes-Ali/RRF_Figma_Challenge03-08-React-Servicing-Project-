import React from 'react'
import HeroImage from '../Components/Frontend/Project/HeroImage'
import ProjectsAll from '../Components/Frontend/Project/ProjectsAll'
import AboutService from '../Components/Frontend/AboutUs/AboutService'
import Testimonial from '../Components/Frontend/Home/Testimonial'
import Footer from '../Components/Frontend/Home/Footer'
import BlogSection from '../Components/Frontend/Home/BlogSection'

const Project = () => {
  return (
    <>
    <HeroImage />
    <ProjectsAll />
    <div className="pb-16">
    <AboutService />
    </div>
    <Testimonial />
    <BlogSection />
      <div className="-mt-3">
        <Footer />
       </div>
    </>
  )
}

export default Project