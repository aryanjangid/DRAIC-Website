import React from "react";
import Avatar from "./Avatar";
import SocialMedia from "./Socialmedia";
import ProfDepList from "./ProgDepList"

function BasicCard(ProfDepList) {
    return (
        <div className="profile-card">
            <div className="text">
                <Avatar img={ProfDepList.imgURL} />
                <h3>{ProfDepList.name}</h3>
                <p>{ProfDepList.branch}</p>
                <div className="links">
                    <SocialMedia linkedin={ProfDepList.linkedinURL} instagram={ProfDepList.instagramURl} />
                </div>
            </div>
        </div>
    )
}
function Card() {
    return (
        <div className="department-container">
            {ProfDepList.map(BasicCard)}
        </div>
    )
}
export default Card