import React, { useEffect } from "react";
import classes from "./Creators.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
import linkedin from "../../Assets/linkedin.svg";
import github from "../../Assets/github.png";
import { creatorsData } from "../../Data/Creators";

const Creators = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div>
        <div className={classes.creator_section}>
          <div className="creators_header">
            <div className="creators_headline_div">
              <h1 data-aos={"zoom-in-up"} className="creators_thought">
                {" "}
                DEVELOPERS OF THIS SITE!
              </h1>
            </div>
            <div className="creators_heading">
              <div
                data-aos={"fade-right"}
                data-aos-delay={"700"}
                className="creators_line_1"
              ></div>
              <div>
                <h1
                  data-aos={"zoom-out"}
                  data-aos-delay={"1200"}
                  className="creators_title"
                >
                  CREATORS
                </h1>
              </div>
              <div
                data-aos={"fade-left"}
                data-aos-delay={"700"}
                className="creators_line_2"
              ></div>
            </div>
          </div>
          <div className="creator_container">
            {creatorsData.map((creator, index) => {
              return (
                <div className="creator_box">
                  <div className="creator_top_bar"></div>
                  <div className="creator_content">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={creator.img}
                      alt=""
                    />
                    <strong>{creator.name}</strong>
                    <p>{creator.position}</p>
                  </div>
                  <div className="creator_btn">
                    <a href="/">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={linkedin}
                        alt=""
                      />
                    </a>
                    <a href="/">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={github}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Creators;
