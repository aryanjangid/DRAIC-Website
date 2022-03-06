import React, { useEffect } from "react";
import "./Achievements.css";
import Achievements1 from "../../Assets/Achievements1.jpg";
import Achievements2 from "../../Assets/Achievements2.webp";
import Achievements3 from "../../Assets/Achievements3.webp";
import Achievements4 from "../../Assets/Achievements4.webp";
import Achievements5 from "../../Assets/Achievements5.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const achievements = [
  {
    name: "Shreyash Choppawar, Amit Prasad & Vedansh Shrivastav",
    description:
      "Second Runner-up at Innovate for Smart Pimpri Chinchwad, innovation Challenge organised by PCSCL, PCMC & PCCOE, Pune.",
    img: Achievements1,
    align: 0,
  },
  {
    name: "Sagar Warungase",
    description:
      "First Position at Techtatva Electronics Competition Organised by EnTC Dept, DYPCOE, Pune.",
    img: Achievements2,
    align: 1,
  },
  {
    name: "Samiksha Bhokare & Dibyanshu Sharma",
    description:
      "Second Position at Techtatva Electronics Competition Organised by EnTC Dept, DYPCOE, Pune.",
    img: Achievements3,
    align: 0,
  },
  {
    name: "Arvind Patel",
    description:
      "Second Runner-up at COEP Mindspark-19 Search & Destroy, organised by COEP, Pune.",
    img: Achievements4,
    align: 1,
  },
  {
    name: "Arvind Patel",
    description:
      " First Position at Bro Code & Code Capture Competition organised by PCCOE, Ravet.",
    img: Achievements5,
    align: 0,
  },
];

const Main = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="achievements_section">
      <div className="achievements_header">
        <div className="achievements_headline_div">
          <h1 data-aos={"zoom-in-up"} className="achievements_thought">
            {" "}
            OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM
          </h1>
        </div>
        <div className="achievements_heading">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="achievements_line_1"
          ></div>
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="achievements_title"
            >
              OUR ACHIEVEMENTS
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="achievements_line_2"
          ></div>
        </div>
      </div>
      <div className="achievements_timeline">
        {achievements.map((a, i) => {
          return a.align === 0 ? (
            <div className="achievement_container left">
              <div
                data-aos-delay={"1000"}
                data-aos={"fade-right"}
                className="achievement_content_container"
              >
                <div className="achievements_contents">
                  <h2>{a.name}</h2>
                  <div className="achievement_devicer"></div>
                  <p>{a.description}</p>
                </div>
                <div className="achievement_image_conainer">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="achievement_image"
                    src={a.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="achievement_container right">
              <div
                data-aos-delay={"1000"}
                data-aos={"fade-left"}
                className="achievement_content_container"
              >
                <div className="achievement_image_conainer">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="achievement_image"
                    src={a.img}
                    alt=""
                  />
                </div>
                <div className="achievements_contents">
                  <h2>{a.name}</h2>
                  <div className="achievement_devicer"></div>
                  <p>{a.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
