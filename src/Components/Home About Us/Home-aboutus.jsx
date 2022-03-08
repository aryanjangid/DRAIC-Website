import React, { useEffect, useRef, useState } from "react";
import aboutusinfo from "../../Data/home-about-us";
import "./Home-aboutus.css";
import AOS from "aos";
// import 'aos/dist/aos.css';

function HomeAbout() {

  const [activeindex, setActiveIndex] = useState(0)
  const [previndex, setPrevIndex] = useState()

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
    setPrevIndex(activeindex)
    setActiveIndex((activeindex + 1) % 3)
  }
  const handleprev = () => {
    setPrevIndex(activeindex)
    setActiveIndex((activeindex - 1 < 0) ? 2 : activeindex - 1)
  }



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
                  {card.ourcollegeimages.map((image, index) => (
                    <img
                      loading="lazy"
                      decoding="async"
                      className={`ourcollegeimg ${index === activeindex ? 'active' : index === previndex ? 'prev' : ''}`}
                      src={image}
                      alt="collegepic"
                      key={index}
                    />
                  ))}
                  <i className="home-about-arrow right" onClick={handlenext} />
                </div>
                <h1 className="imagetext">OUR COLLEGE</h1>
              </div>
              <div className="secondrowcol2">
                <div className="div1">
                  <div className="our-team-slider">
                    {card.ourteamimages.map((image, index) => (
                      <img
                        loading="lazy"
                        decoding="async"
                        className={`ourteamimg ${index === activeindex ? 'active' : index === previndex ? 'prev' : ''}`}
                        src={image}
                        alt="collegepic"
                        key={index}
                      ></img>
                    ))}
                  </div>
                  <h1 className="imagetext">OUR TEAM</h1>
                </div>
                <div className="div2">
                  <div className="our-workshop-slider">
                    {card.ourworkshopimages.map((image, index) => (
                      <img
                        loading="lazy"
                        decoding="async"
                        className={`ourworkshopimg ${index === activeindex ? 'active' : index === previndex ? 'prev' : ''}`}
                        src={image}
                        alt="collegepic"
                        key={index}
                      ></img>
                    ))}
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
