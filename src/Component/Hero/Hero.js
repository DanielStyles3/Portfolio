import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src="./images/intro.jpg" alt='intro' />
      </div>
      <div className='content'>
        <h1>Hi, I'M ONYEBEZIE DANIEL</h1>
        <p>HI, I'M A FREELANCER</p> 
      <h2>
         {/* <div className='content-details'>
          <span className='primary-text'>  */}
            <Typical
              loop={Infinity}
              steps={[
                "Enthusiastic Developer",
                500,
                "FullStack Developer",
                500,
                "React Developer",
                500,
                "Frontend Developer",
                500,
              ]}
            />
            </h2>
          {/* </span>
        </div>  */}
        <br /> 
        <div>
          <Link to="/project" className='btn'>Project</Link>
          <Link to="/contact" className='btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
