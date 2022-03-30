import React from "react";
import Avatar from "./Avatar";
import SocialMedia from "./Socialmedia";
import members from "./ProgDepList";
import "./programming-department.css";

// const ProfDepList = members.filter((member) => member[3] === "Programming");

function Progdep() {
  return (
    <>
      <div className="prog-department-page">
        <div className="prog-department-hero-container">
          <div className="prog-department-text-container">
            <h1 className="prog-department-title">PROGRAMMING DEPARTMENT</h1>
            <p className="prog-department-description">
              We as Public Relations Team Maintain and Manage the vox-pop of the
              team. We publicize what DRAIC as a team does. We design the
              outlook of the team. we work with team collaboration and
              interpersonal skills. We create thoughtful, data-backed pitches,
              engage with social media, send swag, maintain relevant media
              lists, and manage all follow-through. we constantly aim to
              maximize the reach and impact of DRAIC.
            </p>
          </div>
          <div className="prog-department-image-container">
            <img
              loading="lazy"
              decoding="async"
              src="https://cdn.dribbble.com/users/542979/screenshots/3000076/sarah-working-on-computer.gif"
              className="prog-department-image"
              alt="departimg"
            ></img>
          </div>
        </div>

        <div className="prog-department-header-container">
          <h1 className="prog-department-moto">
            A BUNCH OF GEEKS WHO LOVE CODING..!
          </h1>
          <div className="seperator">
            <div className="depline1"></div>
            <div>
              <h1 className="prog-department-name">PROGRAMMING TEAM</h1>
            </div>
            <div className="depline2"></div>
          </div>
        </div>

        <div className="prog-department-members-container">
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

export default Progdep;
