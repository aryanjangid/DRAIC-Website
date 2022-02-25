import React from "react";
import aboutusinfo from "../../Data/home-about-us";
import "./Home-aboutus.css";



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
            {
                aboutusinfo.map(card => {
                    return (
                        <>
                            <div className="secondrow">
                                <div className="secondrowcol1">
                                    <img className="ourcollegeimg" src={card.ourcollegeimage} alt="collegepic"></img>
                                    <h1 className="imagetext">OUR COLLEGE</h1>
                                </div>
                                <div className="secondrowcol2">
                                    <div className="div1">
                                        <img className="ourteamimg" src={card.ourteamimage} alt="collegepic"></img>
                                        <h1 className="imagetext">OUR TEAM</h1>

                                    </div>
                                    <div className="div2">
                                        <img className="ourworkshopimg" src={card.ourworkshopimage} alt="collegepic"></img>
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
                    )
                })
            }


        </div>
    )
}


export default HomeAbout;