import React from "react";
import pic1 from "../../Assets/project1.jpg"
import pic2 from "../../Assets/project2.jpg"
import pic3 from "../../Assets/project3.jpg"
import './Project-home.css';
import { NavLink } from "react-router-dom";
// import "../style.css";

function Project() {
    return (
        <div className="project-component-home">
            <div className="home-project-header">
                <h1 className="home-project-moto">SEE WHAT WE HAVE DONE SO FAR</h1>
                <div className="home-project-seperator">
                    <div className="seperator-decoration-line"></div>
                    <div>
                        <h1 className="home-project-title ">OUR PROJECTS</h1>
                    </div>
                    <div className="seperator-decoration-line"></div>
                </div>

            </div>
            <div className="home-projects-container">
                <div className="home-individual-project-container">
                    <img className="home-project-image" src={pic1} alt="Rome" />
                    <h1 className="home-project-title">AUTONOMOUS QUADRUPLED ROBOT</h1>
                    <div className="home-project-decoration-line" />

                    <p className="home-project-description">Development of 3 Dimensional Printed Autonomous four-legged robot with Servo Motors for actuation.</p>
                    <div className="home-links-container">
                        <div className="view-more-container">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
                        </div>
                        <div className="youtube-link-container">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

                        </div>
                    </div>

                </div>
                <div className="home-individual-project-container">
                    <img className="home-project-image" src={pic2} alt="Rome" />
                    <h1 className="home-project-title">CUSTOMIZED 3 DIMENSIONAL PRINTER</h1>
                    <div className="home-project-decoration-line">

                    </div>
                    <p className="home-project-description">Developed a customized 3D Printer, with PLA as a filament by utilizing some open source resources.</p>
                    <div className="home-links-container">
                        <div className="view-more-container">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
                        </div>
                        <div className="youtube-link-container">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

                        </div>
                    </div>
                </div>
                <div className="home-individual-project-container">
                    <img className="home-project-image" src={pic3} alt="Rome" />
                    <h1 className="home-project-title">AUTONOMOUS PATH FINDER ROBOT</h1>
                    <div className="home-project-decoration-line">

                    </div>
                    <p className="home-project-description">Made an Autonomous Obstacle avoider and Path finder robot with Omni Wheel drive and Ultrasonic Sensor.</p>
                    <div className="home-links-container">
                        <div className="view-more-container">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
                        </div>
                        <div className="youtube-link-container">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}
export default Project

