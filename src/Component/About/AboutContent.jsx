import React from 'react'
import "./About.css"
import react1 from "./image/react1.jpg"
import react2 from "./image/react2.jpg"
import { Link } from 'react-router-dom'


const AboutContent = () => {
  return (
    <div className='about'> 
    <div className='left'>
      <h1>Who Am I?</h1>
      <p>I'm a react frontend developer.i create responsive
        secure website for my clients.
      </p>
        <Link to="/contact">
          <button className='btn'>Contact</button>
        </Link>
    </div>
    <div className='right'>
      <div className='img-container'>
        <div className='img-stack top'>
          <img src={react1} className='img' alt='true'/>
        </div>
        <div className='img-stack bottom'>
          <img src={react2} className='img' alt='true'/>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default AboutContent;
