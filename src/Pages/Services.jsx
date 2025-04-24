import React from 'react'
import TeamSection from '../Components/TeamSection'
import Testimonial from '../Components/Testimonial'
import ServiceTitle from '../Components/Frontend/Service/ServiceTitle'
import OurServicesSection from '../Components/Frontend/Service/OurServicesSection'

const Services = () => {
  return (
    <>
    <div className="">
      <ServiceTitle />
      <OurServicesSection />
      <TeamSection />
      <Testimonial />
    </div>
   
    </>
  )
}

export default Services
