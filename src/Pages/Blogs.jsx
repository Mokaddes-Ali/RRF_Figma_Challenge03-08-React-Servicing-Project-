import React from 'react'
import Testimonial from '../Components/Frontend/Home/Testimonial'
import AboutService from '../Components/Frontend/AboutUs/AboutService'
import BlogsAll from '../Components/Frontend/Blogs/BlogsAll'
import BlogHero from '../Components/Frontend/Blogs/BlogHero'
import AboutCompany from '../Components/Frontend/Blogs/OurCompany'
import Footer from '../Components/Frontend/Home/Footer'
import BlogSection from '../Components/Frontend/Home/BlogSection'

const Blogs = () => {
  return (
    <>
    <BlogHero />
    <AboutCompany />
    <BlogsAll />
    <div className="-pt-[160px]">
    <AboutService />
    </div>
    <div className="pt-10 -mb-3">
    <Testimonial />
    </div>
    <BlogSection />
      <div className="mt-1">
        <Footer />
        </div>
    </>
  )
}

export default Blogs