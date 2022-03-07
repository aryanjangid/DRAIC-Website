import React from "react";
// import pic1 from "../../Assets/Projects Images/project1.jpg"
// import pic2 from "../../Assets/Projects Images/project2.jpg"
// import pic3 from "../../Assets/Projects Images/project3.jpg"
import "./Project-home.css";
import { NavLink } from "react-router-dom";
import homeProjectlist from "../../Data/home-project-list";
// import "../style.css";

const Project = () => {
  return (
    <div className="project-component-home">
      <div className="home-project-header">
        <h1 data-aos={"zoom-in-up"} className="home-project-moto">
          SEE WHAT WE HAVE DONE SO FAR
        </h1>
        <div className="home-project-seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="seperator-decoration-line1"
          ></div>
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="home-project-title-our-project"
            >
              OUR PROJECTS
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="seperator-decoration-line2"
          ></div>
        </div>
      </div>
      <div className="home-projects-container">
        {homeProjectlist.map((card) => {
          return (
            <>
              <div
                data-aos={"zoom-in-up"}
                className="home-individual-project-container"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="home-project-image"
                  src={card.imgURL}
                  alt="Rome"
                />
                <h1 className="home-project-title-heading">
                  {card.project_name}
                </h1>
                <div className="home-project-decoration-line" />

                <p className="home-project-description">
                  {card.project_content}
                </p>
                <div className="home-links-container">
                  <div className="project-link-container">
                    <NavLink
                      activeClassName="active"
                      className="project-link"
                      aria-current="page"
                      to="/project"
                    >
                      <button className="project-button">
                        View More<span className="arrow">&rarr;</span>
                      </button>
                    </NavLink>
                  </div>
                  <div className="project-link-container">
                    <NavLink
                      activeClassName="active"
                      className="project-link"
                      aria-current="page"
                      to={card.youtubeURl}
                    >
                      <button className="project-button">
                        Youtube Link<span className="arrow">&rarr;</span>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        {/* <div className="home-individual-project-container">
                    <img loading='lazy' decoding='async' className="home-project-image" src={pic1} alt="Rome" />
                    <h1 className="home-project-title-heading">AUTONOMOUS QUADRUPLED ROBOT</h1>
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
                    <img loading='lazy' decoding='async' className="home-project-image" src={pic2} alt="Rome" />
                    <h1 className="home-project-title-heading">CUSTOMIZED 3 DIMENSIONAL PRINTER</h1>
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
                    <img loading='lazy' decoding='async' className="home-project-image" src={pic3} alt="Rome" />
                    <h1 className="home-project-title-heading">AUTONOMOUS PATH FINDER ROBOT</h1>
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
                </div> */}
      </div>
    </div>
  );
};
export default Project;
