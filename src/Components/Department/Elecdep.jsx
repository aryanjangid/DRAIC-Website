import React from "react";
import Avatar from "./Avatar";
import SocialMedia from "./Socialmedia";
import members from "./eleDep";
import "./electrical-department.css";
import imx from  "../../Assets/2011.i402.063.Electricity_and_lighting_flat_background-removebg-preview.png"

const ProfDepList = members.filter((member) => member[3] === "Electronics");

function Elecdep() {
  return (
    <>
      <div className="elec-department-page">
        <div className="elec-department-hero-container">
          <div className="elec-department-text-container">
            <h1 className="elec-department-title">ELECTRICAL DEPARTMENT</h1>
            <p className="elec-department-description">
              A random paragraph generator is a tool provided by various
              websites that provides you as many random paragraphs as you want.
              Be it for any work purpose of yours, effortlessly. A random
              paragraph generator is a tool provided by various websites that
              provides you as many random paragraphs as you want. Be it for any
              work purpose of yours, effortlessly.A random paragraph generator is a tool provided by various
              websites that provides you as many random paragraphs as you want.
              Be it for any work purpose of yours, effortlessly. A random
              paragraph generator is a tool provided by various websites that
              provides you as many random paragraphs as you want. Be it for any
              work purpose of yours, effortlessly.
            </p>
          </div>
          <div className="elec-department-image-container">
            <img
              loading="lazy"
              decoding="async"
              src={imx}
              className="elec-department-image"
              alt="departimg"
            ></img>
          </div>
        </div>

        <div className="elec-department-header-container">
          <h1 className="elec-department-moto">
            OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM
          </h1>
          <div className="seperator">
            <div className="depline1"></div>
            <div>
              <h1 className="elec-department-name">ELECTRICAL TEAM</h1>
            </div>
            <div className="depline2"></div>
          </div>
        </div>
        <div className="elec-department-members-container">
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

export default Elecdep;
