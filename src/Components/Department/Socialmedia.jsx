import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function SocialMedia(pro) {
    return (
        <ul className="ul">
            <li className="li">
                <Link className="fa" to={pro.linkedin} target="_blank" ><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></Link>
            </li>
            <li className="li">
                <Link className="fa" to={pro.instagram} target="_blank" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Link>
            </li>
        </ul>
    )
}

export default SocialMedia;