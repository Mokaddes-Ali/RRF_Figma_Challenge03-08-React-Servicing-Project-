import React from 'react'
import HeroImage from '../Components/Frontend/Project/HeroImage'
import ProjectsAll from '../Components/Frontend/Project/ProjectsAll'
import AboutService from '../Components/Frontend/AboutUs/AboutService'
import Testimonial from '../Components/Testimonial'

const Project = () => {
  return (
    <>
    <HeroImage />
    <ProjectsAll />
    <div className="pb-16">
    <AboutService />
    </div>
    <Testimonial />
    </>
  )
}

export default Project