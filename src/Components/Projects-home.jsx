import React from "react";
// import pic1 from "../Assets/project1.jpg"
// import pic2 from "../Assets/project2.jpg"
// import pic3 from "../Assets/project3.jpg"
import './Project-home.css';
import { NavLink } from "react-router-dom";
// import "../style.css";

function Project() {
    return (
        <div className="outermost-project">
            <div className="project-section">
                <h1 className="project-heading">OUR TOP PROJECTS</h1>
            </div>
            <div className="project-line">
            </div>
            <div className="project-container">
                <div className="p-container">
                    <h1 className="project-heading2">AUTONOMOUS QUADRUPLED ROBOT</h1>
                    <div className="projectline">

                    </div>
                    <p className="project-description">Development of 3 Dimensional Printed Autonomous four-legged robot with Servo Motors for actuation.</p>
                    <div className="link-container">
                        <div className="left-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
                        </div>
                        <div className="right-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

                        </div>
                    </div>

                </div>
                <div className="p-container">
                    <h1 className="project-heading2">CUSTOMIZED 3 DIMENSIONAL PRINTER</h1>
                    <div className="projectline">

                    </div>
                    <p className="project-description">Developed a customized 3D Printer, with PLA as a filament by utilizing some open source resources.</p>
                    <div className="link-container">
                        <div className="left-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
                        </div>
                        <div className="right-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

                        </div>
                    </div>
                </div>
                <div className="p-container">
                    <h1 className="project-heading2">AUTONOMOUS PATH FINDER ROBOT</h1>
                    <div className="projectline">

                    </div>
                    <p className="project-description">Made an Autonomous Obstacle avoider and Path finder robot with Omni Wheel drive and Ultrasonic Sensor.</p>
                    <div className="link-container">
                        <div className="left-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
                        </div>
                        <div className="right-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Project

