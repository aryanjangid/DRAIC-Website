import React from "react";
import Avatar from "./Avatar";
import SocialMedia from "./Socialmedia";
import ProfDepList from "./eleDep"
import pc from '../../Assets/cp.jpg'


function Elecdep() {
    return (
        <>
            <div className="department">
                <div className="department-header">
                    <div className="dep-head-text">
                        <div className="dep-head-title">Electrical Department</div>
                        <div className="dep-head-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit harum iusto atque sunt quis explicabo, soluta autem vero voluptates perferendis, eum placeat fugit labore excepturi, quaerat eius similique necessitatibus voluptatum!</div>
                    </div>
                    <div className="dep-img">
                        <img src={pc} alt="" className="elec-img" />
                    </div>
                </div>
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