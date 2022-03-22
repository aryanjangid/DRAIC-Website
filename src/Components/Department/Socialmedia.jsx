import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function SocialMedia(pro) {
    return (
        <ul className="ul">
            <li className="li">
                <a className="fa" href={pro.linkedin} rel="noreferrer" target="_blank" ><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
            </li>
            <li className="li">
            <a className="fa" href={pro.instagram} rel="noreferrer" target="_blank" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            </li>
        </ul>
    )
}

export default SocialMedia;