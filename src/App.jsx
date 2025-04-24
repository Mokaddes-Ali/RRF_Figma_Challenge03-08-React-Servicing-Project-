import React from 'react'
import { BrowserRouter } from 'react-router'
import Header from './Components/Header'
import WebRoute from './Routes/WebRoute'
import Footer from './Components/Footer'
import BlogSection from './Components/BlogSection'

function App() {
  return (
    <>
     <BrowserRouter>
     <div className="">
      <Header />
     </div>
     <WebRoute />
     <div className="">
      <BlogSection />
     </div>
     <div className="">
      <Footer />
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
