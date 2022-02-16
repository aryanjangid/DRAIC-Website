import React from "react";
import draicimage from "../../Assets/logo_white.png";
import "./LandingSlide.css"
function Landingslide() {
    return (
        <div className="landingmain">
         <div class="landing-slide">
            <h1 className="text">D.Y. Patil Robotics & Ai Club</h1>
            <img className="draic-logo" src={draicimage} alt="draic"></img>
        </div>
        </div>
       

    )
}
export default Landingslide