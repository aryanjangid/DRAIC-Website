import React from "react";
import Avatar from "./Avatar";
import SocialMedia from "./Socialmedia";
import ProfDepList from "./eleDep"
import './electrical-department.css'


function Elecdep() {
    return (
        <>
            <div className="department-page">
                {/* <div className="department-header">
                    <div className="dep-head-text">
                        <div className="dep-head-title">Electrical Department</div>
                        <div className="dep-head-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit harum iusto atque sunt quis explicabo, soluta autem vero voluptates perferendis, eum placeat fugit labore excepturi, quaerat eius similique necessitatibus voluptatum!</div>
                    </div>
                    <div className="dep-img">
                        <img src={pc} alt="" className="elec-img" />
                    </div>
                </div> */}

                <div className="department-hero-container">
                    <div className="department-text-container">
                        <h1 className="department-electrical-title">ELECTRICAL DEPARTMENT</h1>
                        <p className="department-description">A random paragraph generator is a tool provided by various websites that provides you as many random paragraphs as you want. Be it for any work purpose of yours, effortlessly. A random paragraph generator is a tool provided by various websites that provides you as many random paragraphs as you want. Be it for any work purpose of yours, effortlessly.</p>
                    </div>
                    <div className="department-image-container">
                        <img src="https://cdn.dribbble.com/users/542979/screenshots/3000076/sarah-working-on-computer.gif" className="department-image" alt="departimg"></img>

                    </div>
                </div>


                <div className="department-header-container">
                    <h1 className="department-moto">OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM</h1>
                    <div className="seperator">
                        <div className="depline1"></div>
                        <div>
                            <h1 className="department-name">ELECTRICAL TEAM</h1>
                        </div>
                        <div className="depline2"></div>
                    </div>

                </div>
                <div className="department-members-container">

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

export default Elecdep