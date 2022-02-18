import React from "react";
import Avatar from "./Avatar";
import SocialMedia from "./Socialmedia";
import ProfDepList from "./ProgDepList"
import './department.css'
import pc from '../../Assets/cp.jpg'
function Progdep() {
    return (
        <>
            <div className="departmentmain">
                {/* <div className="department-header">
                    <div className="dep-head-text">
                        <div className="dep-head-title">Electrical Department</div>
                        <div className="dep-head-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit harum iusto atque sunt quis explicabo, soluta autem vero voluptates perferendis, eum placeat fugit labore excepturi, quaerat eius similique necessitatibus voluptatum!</div>
                    </div>
                    <div className="dep-img">
                        <img src={pc} alt="" className="elec-img" />
                    </div>
                </div> */}

                <div className="depfirstbox">
                    <div className="deptextbox">
                        <h1 className="depheading">PROGRAMMING DEPARTMENT</h1>
                        <p className="deppara">A random paragraph generator is a tool provided by various websites that provides you as many random paragraphs as you want. Be it for any work purpose of yours, effortlessly. A random paragraph generator is a tool provided by various websites that provides you as many random paragraphs as you want. Be it for any work purpose of yours, effortlessly.</p>
                    </div>
                    <div className="deptimgbox">
                        <img src="https://cdn.dribbble.com/users/542979/screenshots/3000076/sarah-working-on-computer.gif" className="depimg" alt="departimg"></img>
                        {/* <iframe className="depimg" src="https://embed.lottiefiles.com/animation/63487%22%3E"></iframe> */}
                    </div>
                </div>


                <div className="depfirstrow">
                    <h1 className="depsmallhead">OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM</h1>
                    <div className="seperator">
                        <div className="depline1"></div>
                        <div>
                            <h1 className="aboutusheading">PROGRAMMING TEAM</h1>
                        </div>
                        <div className="depline2"></div>
                    </div>

                </div>
                <div className="departmentcontainer">
                    {
                        ProfDepList.map(card => {
                            return (
                                <div className="profile-card">
                                    <div className="text">
                                        <Avatar img={card.imgURL} />
                                        <h3>{card.name}</h3>
                                        <p>{card.branch}</p>
                                        <div className="links">
                                            <SocialMedia linkedin={card.linkedinURL} instagram={card.instagramURl} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Progdep