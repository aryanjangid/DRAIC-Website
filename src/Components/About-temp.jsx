import React from "react";
import pic from "../Assets/college.jpg";
import pic1 from "../Assets/college1.jpg";
import pic2 from "../Assets/college2.jpg";

import "./About-temp.css";



function HomeAbout() {
    return (
        <div className="aboutsection1">
                <div className="firstrow">
                    <h1 className="wheredowe">WHERE DO WE COME FROM</h1>
                    <div className="seperator">
                        <div className="lineaboutus1"></div>
                        <div>
                            <h1 className="aboutusheading">ABOUT US</h1>
                        </div>
                        <div className="lineaboutus2"></div>
                    </div>

                </div>
            <div className="secondrow">
                <div className="secondrowcol1">
                    <img className="ourcollegeimg" src={pic} alt="collegepic"></img>
                    <h1 className="imagetext">OUR COLLEGE</h1>

                </div>
                <div className="secondrowcol2">
                    <div className="div1">
                        <img className="ourteamimg" src={pic1} alt="collegepic"></img>
                        <h1 className="imagetext">OUR TEAM</h1>

                    </div>
                    <div className="div2">
                        <img className="ourworkshopimg" src={pic2} alt="collegepic"></img>
                        <h1 className="imagetext">OUR WORKSHOP</h1>

                    </div>
                </div>
            </div>
            <div className="thirdrow">
                <div className="divs1">
                    <h1 className="title1">WHO WE ARE</h1>
                    <p className="paragraph1">A random paragraph generator is a tool provided by various websites that provides you as many random paragraphs as you want. Be it for any work purpose of yours, effortlessly.</p>
                </div>
                <div className="divs1">
                    <h1 className="title1">WHAT WE DO</h1>
                    <p className="paragraph1">A random paragraph generator is a tool provided by various websites that provides you as many random paragraphs as you want. Be it for any work purpose of yours, effortlessly.</p>

                </div>
                <div className="divs2">
                    <h1 className="title1">OUR MISSION</h1>
                    <p className="paragraph1">A random paragraph generator is a tool provided by various websites that provides you as many random paragraphs as you want. Be it for any work purpose of yours, effortlessly.</p>


                </div>
            </div>

        </div>
    )
}


export default HomeAbout;
