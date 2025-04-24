import React from 'react'
import TeamSection from '../Components/Frontend/Home/TeamSection'
import Testimonial from '../Components/Frontend/Home/Testimonial'
import ServiceTitle from '../Components/Frontend/Service/ServiceTitle'
import OurServicesSection from '../Components/Frontend/Service/OurServicesSection'
import Footer from '../Components/Frontend/Home/Footer'
import BlogSection from '../Components/Frontend/Home/BlogSection'

const Services = () => {
  return (
    <>
    <div className="">
      <ServiceTitle />
      <OurServicesSection />
      <div className="pt-[66px]">
      <TeamSection />
      </div>
      <div className="pt-[30px]">
      <Testimonial />
      </div>
      <BlogSection />
      <div className="-mt-3">
        <Footer />
        </div>
    </div>
   
    </>
  )
}

export default Services
