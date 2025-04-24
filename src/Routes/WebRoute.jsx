import React from 'react'
import { Routes, Route } from "react-router";
import HomePage from '../Pages/Homepage'
import AboutUs from '../Pages/AboutUs'
import Services from '../Pages/Services'
import Project from '../Pages/Project';
import Blogs from '../Pages/Blogs';


const WebRoute = () => {
  return (
    <>

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="*" element={<h1 className='text-center text-red-600'>404 Not Found</h1>} />
      </Routes>

      
    </>
  )
}

export default WebRoute
