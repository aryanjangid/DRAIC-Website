import React from "react";
import Avatar from "./Avatar";
import SocialMedia from "./Socialmedia";
import ProfDepList from "./eleDep"

function Elecdep() {
    return (
        <>
            <div className="department">
                <h1 className="department-title">OUR TEAM</h1>
                <div className="department-container">
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