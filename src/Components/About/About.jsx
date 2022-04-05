import React, { useEffect } from "react";
// import { NavLink } from 'react-router-dom';
import InfoCard from "./components/InfoCard";
import NeumericInfobox from "./components/NeumericInfobox";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const card1Text =
  "D. Y. Patil Robotics & AI Club is a group of highly dedicated individuals, from all engineering disciplines, working passionately in the field of Robotics & AI to take the college (DYPCOE, Pune) to new heights in this field. The Club focuses on the development of students through working on various robotic projects and also participating in National as well as International level Competitions.";
const card1Icon =
  "https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-group-social-media-sbts2018-solid-sbts2018.png";
const card1Title = "WHO WE ARE";

const card2Text =
  "Team DRAIC seeks to inspire the next generation of bright minds, cultivate an appreciation for the present technology and develop cognitive thinking toward the solutions to the present scenario by engaging in competition and building innovative projects.";
const card2Icon =
  "https://img.icons8.com/ios-filled/50/ffffff/mission-of-a-company.png";
const card2Title = "MISSION";

const card3Text =
  "To achieve excellence in the field of robotics and AI, Thus contributing to the development of the nation. To achieve excellence in the field of robotics and AI, Thus contributing to the development of the nation.";
const card3Icon = "https://img.icons8.com/android/48/ffffff/rocket.png";
const card3Title = "VISION";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div className="about-body">
      <div className="aboutmain">
        <div className="about-title-body">
          <h1 data-aos={"zoom-in-up"} className="about-subheading">
            WHO WE ARE AND WHY WE ARE DOING THIS
          </h1>
          <div className="about-seperator">
            <div
              data-aos={"fade-right"}
              data-aos-delay={"700"}
              className="about-title-line1"
            ></div>
            <div>
              <h1
                data-aos={"zoom-out"}
                data-aos-delay={"1200"}
                className="about-heading"
              >
                ABOUT US
              </h1>
            </div>
            <div
              data-aos={"fade-left"}
              data-aos-delay={"700"}
              className="about-title-line2"
            ></div>
          </div>
        </div>

        <div className="about-content">
          <div
            data-aos={"fade-up"}
            data-aos-delay={"1000"}
            className="about-content-first-row"
          >
            <InfoCard
              contentText={card1Text}
              cardIcon={card1Icon}
              cardTitle={card1Title}
              key={card1Title}
            />
            <InfoCard
              contentText={card2Text}
              cardIcon={card2Icon}
              cardTitle={card2Title}
              key={card2Title}
            />
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-delay={"1400"}
            className="about-content-second-row"
          >
            <InfoCard
              contentText={card3Text}
              cardIcon={card3Icon}
              cardTitle={card3Title}
              key={card3Title}
            />
            <div className="neumeric-info-boxes">
              <div className="neumeric-info-row-1">
                <NeumericInfobox NeumericTitle={"Members"} n={"30+"} />
                <NeumericInfobox NeumericTitle={"Projects"} n={"50+"} />
              </div>
              <div className="neumeric-info-row-2">
                <NeumericInfobox NeumericTitle={"Alumini"} n={"300+"} />
                <NeumericInfobox NeumericTitle={"Achievements"} n={"50+"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
