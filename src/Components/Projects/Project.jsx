import React from "react";
// // import pic1 from "../../Assets/project1.jpg"
// import pic2 from "../../Assets/project2.jpg"
// import pic3 from "../../Assets/project3.jpg"
import { NavLink } from "react-router-dom";
import "./Project.css";
import projectList from "../../Data/project-list.js"


function project() {
  return (
    <div className="project-page">
      <div className="project-header">
        <div className="project_headline_div">
          <h1 className="project-moto">A GLIMPSE OF THE JOURNEY, WE MADE</h1>
        </div>
        <div className="project-seperator">
          <div className="project-line1"></div>
          <div>
            <h1 className="project-page-title">OUR PROJECTS</h1>
          </div>
          <div className="project-line2"></div>
        </div>

      </div>
      <div className="projects-container">{
        projectList.map(card => {
          return (
            <>
              <div className="individual-project-container">
                <img className="project-image" src={card.imgURL} alt="Rome" />
                <h1 className="project-title">{card.project_name}</h1>
                <div className="project-decoration-line" />

                <p className="project-description">{card.project_content}</p>
                <div className="home-links-container">
                  <div className="view-more-container">
                    <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
                  </div>
                  <div className="youtube-link-container">
                    <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

                  </div>
                </div>
              </div>

            </>
          )
        })
      }





{/* 
        <div className="individual-project-container">
          <img className="project-image" src={pic2} alt="Rome" />
          <h1 className="project-title">CUSTOMIZED 3 DIMENSIONAL PRINTER</h1>
          <div className="project-decoration-line">

          </div>
          <p className="project-description">Developed a customized 3D Printer, with PLA as a filament by utilizing some open source resources.</p>
          <div className="home-links-container">
            <div className="view-more-container">
              <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
            </div>
            <div className="youtube-link-container">
              <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

            </div>
          </div>
        </div>
        <div className="individual-project-container">
          <img className="project-image" src={pic3} alt="Rome" />
          <h1 className="project-title">AUTONOMOUS PATH FINDER ROBOT</h1>
          <div className="project-decoration-line">

          </div>
          <p className="project-description">Made an Autonomous Obstacle avoider and Path finder robot with Omni Wheel drive and Ultrasonic Sensor.</p>
          <div className="home-links-container">
            <div className="view-more-container">
              <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">View More<span>&rarr;</span></button></NavLink>
            </div>
            <div className="youtube-link-container">
              <NavLink activeClassName="active" className="link-active" aria-current="page" to="/project"><button className="project-card-btn">Youtube Link<span>&rarr;</span></button></NavLink>

            </div>
          </div>
        </div> */}

      </div>

    </div>
  )
}
export default project

