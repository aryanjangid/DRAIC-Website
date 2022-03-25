import React, { useEffect } from "react";
import pic1 from "../../Assets/Projects Images/project1.jpg";
import pic2 from "../../Assets/Projects Images/project2.jpg";
import pic3 from "../../Assets/Projects Images/project3.jpg";
// import { NavLink } from "react-router-dom";
import "./Project.css";
import projectList from "../../Data/project-list.js";
import AOS from "aos";
import "aos/dist/aos.css";

const projectupcomingList = [
  {
    id: 1,
    project_name: "CUSTOMIZED 3 DIMENSIONAL PRINTER",
    imgURL: pic1,
    project_content:
      "Developed a customized 3D Printer, with PLA as a filament by utilizing some open source resources.",
    githubURL: "#",
    youtubeURl: "#",
  },
  {
    id: 2,
    project_name: "AUTONOMOUS PATH FINDER ROBOT",
    imgURL: pic2,
    project_content:
      "Developed a customized 3D Printer, with PLA as a filament by utilizing some open source resources.",
    githubURL: "#",
    youtubeURl: "#",
  },

  {
    id: 3,
    project_name: "CUSTOMIZED 3 DIMENSIONAL PRINTER",
    imgURL: pic3,
    project_content:
      "Developed a customized 3D Printer, with PLA as a filament by utilizing some open source resources.",
    githubURL: "#",
    youtubeURl: "#",
  },
];
const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="project-page">
      <div style={{ display: "none" }} className="project-headerupcoming">
        <div className="project_headline_div">
          <h1 data-aos={"zoom-in-up"} className="project-moto">
            A GLIMPSE OF THE JOURNEY, WE MADE
          </h1>
        </div>
        {/* <div className="midline"><hr /></div> */}
        <div className="project-seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="project-line1"
          ></div>
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="project-page-title"
            >
              LIVE PROJECTS
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="project-line2"
          ></div>
        </div>
      </div>
      <div style={{ display: "none " }} className="projectsupcomingcontainer">
        {projectupcomingList.map((card, i) => {
          return (
            <>
              <div
                data-aos={"zoom-in-up"}
                data-aos-delay={`${i > 2 ? "0" : "700"}`}
                className="individual-project-container"
              >
                {/* <img loading='lazy' decoding='async' className="project-image" src={card.imgURL} alt="Rome" /> */}
                <h1 className="project-title">{card.project_name}</h1>
                <div className="project-decoration-line" />

                <p className="project-description">{card.project_content}</p>
                <div className="home-links-container">
                  {/* <div className="project-link-container">
                    <NavLink activeClassName="active" className="project-link" aria-current="page" to="/project"><button className="project-button">View More<span className="arrow">&rarr;</span></button></NavLink>
                  </div>
                  <div className="project-link-container">
                      <NavLink activeClassName="active" className="project-link" aria-current="page" to={card.youtubeURl}><button className="project-button">Youtube Link<span className="arrow">&rarr;</span></button></NavLink>
                  </div> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="project-header">
        <div className="project_headline_div">
          <h1 data-aos={"zoom-in-up"} className="project-moto">
            A GLIMPSE OF THE JOURNEY, WE MADE
          </h1>
        </div>
        <div className="project-seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="project-line1"
          ></div>
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="project-page-title"
            >
              OUR PROJECTS
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="project-line2"
          ></div>
        </div>
      </div>

      <div className="projects-container">
        {projectList.map((card, i) => {
          return (
            <>
              <div
                data-aos={"zoom-in-up"}
                data-aos-delay={`${i > 2 ? "0" : "700"}`}
                className="individual-project-container"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="project-image"
                  src={card.imgURL}
                  alt="Rome"
                />
                <h1 className="project-title">{card.project_name}</h1>
                <div className="project-decoration-line" />

                <p className="project-description">{card.project_content}</p>
                <div className="home-links-container">
                  {/* <div className="project-link-container">
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
                  </div> */}
                  {/* <div className="project-link-container">
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
                  </div> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Project;
