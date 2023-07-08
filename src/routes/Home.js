import React from 'react'
import Navbar from '../Component/Navbar/Navbar';
import Hero from '../Component/Hero/Hero';
import Footer from '../Component/Footer/Footer';
import Work from '../Component/Work/Work';
// import Experience from '../Component/Experience/Experience';

const Home = () => {
  return (
    <div>
        <Navbar />
        < Hero />
        <Work />
        {/* <Experience /> */}
        <Footer /> 
    </div>

  )
    
  
}

export default Home
