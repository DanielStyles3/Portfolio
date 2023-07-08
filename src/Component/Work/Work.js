import "./Work.css"
import React from 'react'
import pro from "./images/pro.png";
import pro3 from "./images/pro3.png";
import pro2 from "./images/pro2.png"
import { NavLink } from "react-router-dom";


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Project</h1>
        <div className="project-container">
            <div className="project-card">
            <img src={pro} alt="Project" />
            <h2 className="project-title">Movie Website Design</h2>
            <div className="pro-detail">
                <p>With our user-friendly platform, you can enjoy Styles's film on any device - desktop, tablet, or smartphone. 
                  Stream your favorite movies and shows on the go, anytime, anywhere.
</p>
                <div className="pro-btns">
                    <NavLink to={"https://resplendent-otter-59e83f.netlify.app/"}
                    className="btn">View </NavLink>
                    <NavLink to="url.com"className="btn">Source </NavLink>

                </div>
            </div>
            </div>
        </div>
        {/* <h1 className="project-heading">Project</h1> */}
        <div className="project-container">
            <div className="project-card">
            <img src={pro3} alt="Project" />
            <h2 className="project-title">Saloon and Spa Website Design</h2>
            <div className="pro-detail">
                <p>Discover the art of beauty and style at our salon. Our talented hairstylists, makeup artists, and nail technicians are dedicated to enhancing your natural beauty. 
                  Whether you're looking for a stylish haircut, a glamorous makeover, or a perfect manicure, we'll exceed your expectations and leave you feeling confident and radiant.


</p>
                <div className="pro-btns">
                    <NavLink to={"https://snazzy-sorbet-39d3a0.netlify.app/"}
                    className="btn">View </NavLink>
                    <NavLink to="/"className="btn">Source </NavLink>

                </div>
            </div>
            </div>
        </div>
        <div className="project-container">
            <div className="project-card">
            <img src={pro2} alt="Project" />
            <h2 className="project-title">Real Estate Website Design</h2>
            <div className="pro-detail">
                <p>If you're in search of a rental property, we've got you covered. Browse our extensive rental listings and find the perfect place to call home. 
                  From apartments to townhouses, we have a variety of options to suit your needs.


</p>
                <div className="pro-btns">
                    <NavLink to={"https://nimble-centaur-3c9dd9.netlify.app/"}
                    className="btn">View </NavLink>
                    <NavLink to="/"className="btn">Source </NavLink>

                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Work
