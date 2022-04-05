import React, { useEffect, useState } from "react";
import aboutusinfo from "../../Data/home-about-us";
import "./Home-aboutus.css";
import AOS from "aos";
import { Link } from "react-router-dom";
// import 'aos/dist/aos.css';

function HomeAbout() {
  const [activeindex, setActiveIndex] = useState(0);
  const [previndex, setPrevIndex] = useState(2);
  const [nextindex, setNextIndex] = useState(1);
  const [move, setMove] = useState("right");

  const [activeindex2, setActiveIndex2] = useState(0);
  const [previndex2, setPrevIndex2] = useState(2);
  const [nextindex2, setNextIndex2] = useState(1);
  const [move2, setMove2] = useState("right");

  const [activeindex3, setActiveIndex3] = useState(0);
  const [previndex3, setPrevIndex3] = useState(2);
  const [nextindex3, setNextIndex3] = useState(1);
  const [move3, setMove3] = useState("right");

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, [activeindex]);

  // setTimeout(() => {
  //   setPrevIndex(activeindex)
  //   setActiveIndex((activeindex + 1) % 3)
  // }, 5000)

  const handlenext = () => {
    setPrevIndex(activeindex);
    setActiveIndex((activeindex + 1) % 3);
    setNextIndex((activeindex + 2) % 3);
    setMove("right");
  };
  const handleprev = () => {
    setPrevIndex(previndex - 1 < 0 ? 2 : previndex - 1);
    setActiveIndex(activeindex - 1 < 0 ? 2 : activeindex - 1);
    setNextIndex(activeindex);
    setMove("left");
  };

  const handlenext2 = () => {
    setPrevIndex2(activeindex2);
    setActiveIndex2((activeindex2 + 1) % 3);
    setNextIndex2((activeindex2 + 2) % 3);
    setMove2("right");
  };
  const handleprev2 = () => {
    setPrevIndex2(previndex2 - 1 < 0 ? 2 : previndex2 - 1);
    setActiveIndex2(activeindex2 - 1 < 0 ? 2 : activeindex2 - 1);
    setNextIndex2(activeindex2);
    setMove2("left");
  };

  const handlenext3 = () => {
    setPrevIndex3(activeindex3);
    setActiveIndex3((activeindex3 + 1) % 4);
    setNextIndex3((activeindex3 + 2) % 4);
    setMove3("right");
  };
  const handleprev3 = () => {
    setPrevIndex3(previndex3 - 1 < 0 ? 3 : previndex3 - 1);
    setActiveIndex3(activeindex3 - 1 < 0 ? 3 : activeindex3 - 1);
    setNextIndex3(activeindex3);
    setMove3("left");
  };

  return (
    <div className="aboutsection1">
      <div className="firstrow">
        <h1 data-aos={"zoom-out"} className="wheredowe">
          WHERE DO WE COME FROM
        </h1>
        <div className="seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="lineaboutus1"
          ></div>
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"700"}
              className="aboutusheading"
            >
              ABOUT US
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="lineaboutus2"
          ></div>
        </div>
      </div>
      {aboutusinfo.map((card) => {
        return (
          <>
            <div className="secondrow">
              <div className="secondrowcol1">
                <div className="our-college-slider">
                  <i className="home-about-arrow left" onClick={handleprev} />
                  <div className="slider-content">
                    {card.ourcollegeimages.map((image, index) => (
                      <img
                        loading="lazy"
                        decoding="async"
                        className={`ourcollegeimg 
                        ${index === activeindex
                            ? "active"
                            : index === previndex
                              ? "prev"
                              : index === nextindex
                                ? "next"
                                : ""
                          } 
                        ${move === "left"
                            ? "left"
                            : move === "right"
                              ? "right"
                              : ""
                          }
                      `}
                        src={image}
                        alt="collegepic"
                        key={index}
                      />
                    ))}
                  </div>
                  <i className="home-about-arrow right" onClick={handlenext} />
                </div>
                <Link to="//www.dypcoeakurdi.ac.in" target="_blank" className="home-about-slider-image-container" >
                  <h1 className="imagetext">OUR COLLEGE</h1>
                </Link>
              </div>
              <div className="secondrowcol2">
                <div className="div1">
                  <div className="our-team-slider">
                    <i
                      className="home-about-arrow left"
                      style={{ display: "none" }}
                      onClick={handleprev2}
                    />
                    {card.ourteamimages.map((image, index) => (
                      <img
                        loading="lazy"
                        decoding="async"
                        className={`ourteamimg
                        ${index === activeindex2
                            ? "active"
                            : index === previndex2
                              ? "prev"
                              : index === nextindex2
                                ? "next"
                                : ""
                          }
                        ${move2 === "left"
                            ? "left"
                            : move2 === "right"
                              ? "right"
                              : ""
                          }
                        `}
                        src={image}
                        alt="collegepic"
                      // key={index}
                      ></img>
                    ))}
                    <i
                      className="home-about-arrow right"
                      style={{ display: "none" }}
                      onClick={handlenext2}
                    />
                  </div>
                  <Link to="/team" className="home-about-slider-image-container" >
                    <h1 className="imagetext">OUR TEAM</h1>
                  </Link>
                </div>
                <div className="div2">
                  <div className="our-workshop-slider">
                    <i
                      className="home-about-arrow left"
                      onClick={handleprev3}
                    />

                    {card.ourworkshopimages.map((image, index) => (
                      <img
                        loading="lazy"
                        decoding="async"
                        className={`ourworkshopimg
                        ${index === activeindex3
                            ? "active"
                            : index === previndex3
                              ? "prev"
                              : index === nextindex3
                                ? "next"
                                : ""
                          }
                        ${move3 === "left"
                            ? "left"
                            : move3 === "right"
                              ? "right"
                              : ""
                          }
                          `}
                        src={image}
                        alt="collegepic"
                        key={index}
                      ></img>
                    ))}
                    <i
                      className="home-about-arrow right"
                      onClick={handlenext3}
                    />
                  </div>

                  <h1 className="imagetext">OUR WORKSHOP</h1>
                </div>
              </div>
            </div>
            <div className="thirdrow">
              <div className="divs1">
                <h1 className="title1">WHO WE ARE</h1>
                <p className="paragraph1">{card.whoweare}</p>
              </div>
              <div className="divs1">
                <h1 className="title1">WHAT WE DO</h1>
                <p className="paragraph1">{card.whatwedo}</p>
              </div>
              <div className="divs2">
                <h1 className="title1">OUR MISSION</h1>
                <p className="paragraph1">{card.ourmission}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default HomeAbout;