// import React from "react";
import "./Footer.css"
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaLinkedin,  FaTwitter} from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome  size={20}
                style={{color:"white",marginRight:"2rem"}}
                />
            
            <div>
                <p>2,Ganiu close,</p>
                <p>Ketu Alapere</p>
                <p>Lagos.</p>
            </div>
            </div>
            <h4>
            <div className="phone">
                <FaPhone size={20}
                style={{color:"white",marginRight:"2rem"}} />
            <div>
                <p>080-7064-2956</p>
            </div>
            </div>
            </h4>
            <h4>
            <div className="email">
                <FaMailBulk size={20}
                                style={{color:"white",marginRight:"2rem"}} />
            <div>
                <p>danielstyles318@gmail.com</p>
            </div>
            </div>
            </h4>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is me Daniel Onyebezie,i enjoy discussing
            new projects and design challenges.
                </p>
                <div className="social">
                    <FaFacebook
                    size={30}
                    style={{color:"#fff",
                    marginRight:"1rem"
                
                }}
                />
                   <FaLinkedin
                    size={30}
                    style={{color:"#fff",
                    marginRight:"1rem"
                
                }}
                />
                   <FaTwitter
                    size={30}
                    style={{color:"#fff",
                    marginRight:"1rem"
                
                }}
                />
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
