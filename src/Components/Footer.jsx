import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-links">
                    <Link className="footer-link" to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><i class="fab fa-linkedin"></i></Link>
                    <Link className="footer-link" to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><i class="fab fa-instagram-square"></i></Link>
                    <Link className="footer-link" to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><i class="fab fa-twitter-square"></i></Link>
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
