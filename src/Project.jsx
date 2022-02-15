import React from "react";
import pic1 from "./Assets/project1.jpg"
import pic2 from "./Assets/project2.jpg"
import pic3 from "./Assets/project3.jpg"
import { NavLink } from "react-router-dom";
import "./Components/Project.css";


function project() {
  return (
    <div className="projectsp">
      <div className="firstrowproject">
        <h1 className="wheredowe">A GLIMPSE OF THE JOURNEY, WE MADE</h1>
        <div className="seperator">
          <div className="lineachi1"></div>
          <div>
            <h1 className="aboutusheading">OUR PROJECTS</h1>
          </div>
          <div className="lineachi2"></div>
        </div>

      </div>
      <div className="project-container">
                <div className="p-container">
                <img className="project-image" src={pic1} alt="Rome" />
                    <h1 className="title1ourproject">AUTONOMOUS QUADRUPLED ROBOT</h1>
                    <div className="projectline">

                    </div>
                    <p className="project-description">Development of 3 Dimensional Printed Autonomous four-legged robot with Servo Motors for actuation.</p>
                    {/* <div className="link-container">
                        <div className="left-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
                        </div>
                        <div className="right-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

                        </div>
                    </div> */}

                </div>
                <div className="p-container">
                    <img className="project-image" src={pic2} alt="Rome" />
                    <h1 className="title1ourproject">CUSTOMIZED 3 DIMENSIONAL PRINTER</h1>
                    <div className="projectline">

                    </div>
                    <p className="project-description">Developed a customized 3D Printer, with PLA as a filament by utilizing some open source resources.</p>
                    {/* <div className="link-container">
                        <div className="left-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
                        </div>
                        <div className="right-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

                        </div>
                    </div> */}
                </div>
                <div className="p-container">
                <img className="project-image" src={pic3} alt="Rome" />
                    <h1 className="title1ourproject">AUTONOMOUS PATH FINDER ROBOT</h1>
                    <div className="projectline">

                    </div>
                    <p className="project-description">Made an Autonomous Obstacle avoider and Path finder robot with Omni Wheel drive and Ultrasonic Sensor.</p>
                    {/* <div className="link-container">
                        <div className="left-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
                        </div>
                        <div className="right-link">
                            <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

                        </div>
                    </div> */}
                </div>

            </div>
      {/* <div className="background">
        <div className="grid">
          <div className="grid-item">
            <div className="card">
              <img className="card-img1" src={pic1} alt="Rome" />
              <div className="card-content">
                <h1 className="card-header">Autonomous Quadrupled Robot</h1>
                <p className="card-text">
                  Development of 3D Printed Autonomous four-legged robot with Servo Motors for actuation.
                </p>
                <button className="card-btn">Know More<span>&rarr;</span></button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img
                className="card-img2"
                src={pic2}
                alt="Grand Canyon"
              />
              <div className="card-content">
                <h1 className="card-header">Customized 3D Printer</h1>
                <p className="card-text">
                  Developed a customized 3D Printer, with PLA as a filament by utilizing some open source resources.
                </p>
                <button className="card-btn">Know More<span>&rarr;</span></button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img3" src={pic3} alt="Maldives" />
              <div className="card-content">
                <h1 className="card-header">Autonomous Path Finder Robot</h1>
                <p className="card-text">
                  Made an Autonomous Obstacle avoider and Path finder robot with Omni Wheel drive and Ultrasonic Sensor.
                </p>
                <button className="card-btn">Know More<span>&rarr;</span></button>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  )
}
export default project

