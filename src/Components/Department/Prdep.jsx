import React from "react";
// import Avatar from "./Avatar";
// import SocialMedia from "./Socialmedia";
// import members from "./ProgDepList";

import "./programming-department.css";

const Prdep = () => {
  return (
    <>
      <div className="mech-department-page">
        {/* mech-department-hero-container */}
        <div
          style={{ backgroundColor: "#1581BA" }}
          className=" mech-department-hero-container"
        >
          <div className="mech-department-text-container">
            <h1 className="mech-department-title">PUBLIC RELATIONS</h1>
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
              src="https://virlenda.unipasby.ac.id/pluginfile.php/28903/course/overviewfiles/bb0cc783196fa9b2119864ff90eb5702.gif"
              className=" mech-department-image"
              alt="departimg"
            ></img>
          </div>
        </div>
{/* 
        <div className="mech-department-header-container">
          <h1 className="mech-department-moto">
            GETTING ATTENTION TO THE RIGHT PLACE..!
          </h1>
          <div className="seperator">
            <div className="depline1"></div>
            <div>
              <h1 className="mech-department-name">PUBLIC RELATIONS</h1>
            </div>
            <div className="depline2"></div>
          </div>
        </div>
        <div className="mech-department-members-container">
          {members.map((card) => {
            return (
              <div className="profile-card">
                <div className="text">
                  <Avatar img={card[4]} />
                  <h3>{card[2]}</h3>
                  <p>{card[5]}</p>
                  <div className="links">
                    <SocialMedia linkedin={card[7]} instagram={card[8]} />
                  </div>
                </div>
              </div>
            );
          })}
        
      </div> */}
      </div>
    </>
  );
};

export default Prdep;
