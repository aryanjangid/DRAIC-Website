import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-links">
                    <Link className="footer-link" to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin"/></Link>
                    <Link className="footer-link" to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="instagram" /></Link>
                    <Link className="footer-link" to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="twitter"/></Link>
                </div>
                <div className="copywrite">
                    <p>@ 2022 D.Y. Patil Robotics & Ai Club</p>
                    <p>All Rights Reserved.</p>
                </div>
            </div>
            {/* <div className="background"></div> */}
        </>
    )
}

export default Footer
