import React, { useEffect } from "react";
import draicimage from "../../Assets/logo_white.png";
import "./LandingSlide.css";
import AOS from "aos";
// import 'aos/dist/aos.css';

const Landingslide = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const headline = () => (
    <>
      <span className="text">D</span>
      <span className="text">.</span>
      <span className="text">Y</span>
      <span className="text">.</span>
      <span className="text"> </span>
      <span className="text">P</span>
      <span className="text">a</span>
      <span className="text">t</span>
      <span className="text">i</span>
      <span className="text">l</span>
      <span className="text"> </span>
      <span className="text">R</span>
      <span className="text">o</span>
      <span className="text">b</span>
      <span className="text">o</span>
      <span className="text">t</span>
      <span className="text">i</span>
      <span className="text">c</span>
      <span className="text">s</span>
      <span className="text"> </span>
      <span className="text">&</span>
      <span className="text"> </span>
      <span className="text">A</span>
      <span className="text">I</span>
      <span className="text"> </span>
      <span className="text">C</span>
      <span className="text">l</span>
      <span className="text">u</span>
      <span className="text">b</span>
    </>
  );

  return (
    <div className="landingmain">
      <div className="landing-slide">
        <h1 className="text">
          {/* D.Y. Patil Robotics & AI Club */}
          {headline()}
        </h1>
        <img
          data-aos={"flip-left"}
          className="draic-logo"
          src={draicimage}
          alt="draic"
        ></img>
      </div>
    </div>
  );
};
export default Landingslide;
