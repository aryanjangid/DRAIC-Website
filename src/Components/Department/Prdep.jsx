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
            We as Public Relations Team Maintain and Manage the vox-pop of the team. We publicize what DRAIC as a team does. We design the outlook of the team. we work with team collaboration and interpersonal skills. We create thoughtful, data-backed pitches, engage with social media, send swag, maintain relevant media lists, and manage all follow-through. we constantly aim to maximize the reach and impact of DRAIC.
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
