import React from "react";
import Avatar from "./Avatar";
import SocialMedia from "./Socialmedia";
import members from "./mechDep";
import "./mechanical-department.css";

// const ProfDepList = members.filter((member) => member[3] === "Mechanical");

function mechdep() {
  return (
    <>
      <div className="mech-department-page">
        {/* mech-department-hero-container */}
        <div className=" mech-department-hero-container">
          <div className="mech-department-text-container">
            <h1 className="mech-department-title">MECHANICAL DEPARTMENT</h1>
            <p className="mech-department-description">
              We as a Programming team develop new programs, test and update
              existing ones, identify and correct those errors and work on all
              the technical stuff you can think of. We believe that any problem
              that exists, can be solved by having a clear perspective and using
              a logical approach to solve it. We keep this principle in our
              minds while working on a project. Innovation and creativity are
              always welcome in our workspace. No Idea is too small for us. If
              it can be coded, we will code it!
            </p>
          </div>
          <div className="mech-department-image-container">
            {/* mech-department-image */}
            <img
              loading="lazy"
              decoding="async"
              src="https://cdn.dribbble.com/users/2221597/screenshots/11933222/media/c7bff7d4fa3f4befecb1cd1ae87c08ae.gif"
              className=" mech-department-image"
              alt="departimg"
            ></img>
          </div>
        </div>

        <div className="mech-department-header-container">
          <h1 className="mech-department-moto">
            OUR WORK BEGINS WHEN THE CODE ENDS..!
          </h1>
          <div className="seperator">
            <div className="depline1"></div>
            <div>
              <h1 className="mech-department-name">MECHANICAL TEAM</h1>
            </div>
            <div className="depline2"></div>
          </div>
        </div>
        <div className="mech-department-members-container">
          {members.map((card) => {
            return (
              <div className="profile-card">
                <div className="text">
                  <Avatar img={card.imgurl} />
                  <h3>{card.name}</h3>

                  <div className="card--text">
                    <p>{card.branch}</p>
                    <p className="double-or" style={{ color: "#03a9f4" }}>
                      {" "}
                      &nbsp; || &nbsp;
                    </p>
                    <p>{card.year}</p>
                  </div>
                  <div className="links">
                    <SocialMedia
                      linkedin={card.linkedin}
                      instagram={card.instagram}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default mechdep;
