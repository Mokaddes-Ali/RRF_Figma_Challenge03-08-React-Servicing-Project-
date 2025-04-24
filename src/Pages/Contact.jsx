import React from 'react'
import PageTitleContac from '../Components/Frontend/Contact/PageTitleContac'
import ContactForm from '../Components/Frontend/Contact/ContactForm'
import GoogleMap from '../Components/Frontend/Contact/GoogleMap'
import Footer from '../Components/Frontend/Home/Footer'
import BlogSection from '../Components/Frontend/Home/BlogSection'

const Contact = () => {
  return (
    <>
    <PageTitleContac />
    <ContactForm />
    <GoogleMap />
    <BlogSection />
      <div className="mt-5">
        <Footer />
        </div>
    </>
  )
}

export default Contact