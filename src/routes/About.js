import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import Banner from '../Component/Banner/Banner'
import AboutContent from '../Component/About/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar />
      <Banner heading="ABOUT." text="I'm a friendly Front-End Developer."/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default About
