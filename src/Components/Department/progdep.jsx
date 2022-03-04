import React from "react";
import Avatar from "./Avatar";
import SocialMedia from "./Socialmedia";
import members from "./ProgDepList";
import "./programming-department.css";

const ProfDepList = members.filter((member) => member[3] === "Programming");

function Progdep() {
  return (
    <>
      <div className="prog-department-page">
        <div className="prog-department-hero-container">
          <div className="prog-department-text-container">
            <h1 className="prog-department-title">PROGRAMMING DEPARTMENT</h1>
            <p className="prog-department-description">
              A random paragraph generator is a tool provided by various
              websites that provides you as many random paragraphs as you want.
              Be it for any work purpose of yours, effortlessly. A random
              paragraph generator is a tool provided by various websites that
              provides you as many random paragraphs as you want. Be it for any
              work purpose of yours, effortlessly.
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
            OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM
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
          {ProfDepList.map((card) => {
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
        </div>
      </div>
    </>
  );
}

export default Progdep;
