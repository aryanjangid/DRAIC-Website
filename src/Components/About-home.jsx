import React from "react";
import pic from "../Assets/college.jpg";
import pic1 from "../Assets/college1.jpg";

import "./HomeAbout.css";



function HomeAbout(){ 
    return (
    <>
    <div className="HomeAmain">
        <div className="HomeAtitle">
        
            <p className="HomeAtitle-main about-margin">About</p>
            <p className="HomeAtitle-sub about-margin">A random paragraph generator is a tool</p>

        </div>

        </div>
        <div className="HomeAgrid">
            <div className="HomeAgrid1">
                <div className="HomeAgrid1box flow grid-row-span-2 image-h">
                    <img className="HomeAgrid1img" src={pic} alt="collegepic"></img>
                    <p className="HomeAtitle-img">Our College</p>
                </div>
                <div className="HomeAgrid1box">
                    <img className="HomeAgrid2img " src={pic1} alt="collegepic"></img>
                    <p className="HomeAtitle-img">Our Team</p>
                </div>
                <div className="HomeAgrid1box">
                    <img className="HomeAgrid2img" src={pic1} alt="collegepic"></img>
                    <p className="HomeAtitle-img">Our Workshop</p>
                </div>

            </div>
            <div className="HomeAgrid2">
                <div className="HomeAgrid2box mid-line">
                    <p className="HomeAtitle-sub">Who we are</p>
                    <p>A random paragraph generator is a tool provided by various websites that provides you as many random paragraphs as you want. Be it for any work purpose of yours, effortlessly.</p>
                </div>
                <div className="HomeAgrid2box mid-line">
                    <p className="HomeAtitle-sub">What we do</p>
                    <p>A random paragraph generator is a tool provided by various websites that provides you as many random paragraphs as you want. Be it for any work purpose of yours, effortlessly.</p>
                </div>
                <div className="HomeAgrid2box">
                    <p className="HomeAtitle-sub">Our mission</p>
                    <p>A random paragraph generator is a tool provided by various websites that provides you as many random paragraphs as you want. Be it for any work purpose of yours, effortlessly.</p>
                </div>

            </div>

        </div>
        
    </>
    )
}


export default HomeAbout;
