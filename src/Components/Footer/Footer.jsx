import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
    return (
        <>
           
            <div className="footer">
                <div className="footer-links">
                    <Link className="footer-link" to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin"/></Link>
                    <Link className="footer-link" to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="Instagram" /></Link>
                    <Link className="footer-link" to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="Twitter"/></Link>
                </div>
                <p className="contact">Contact Us</p>
                <div className="footertitle">
                    <h1> <strong> DRAIC </strong></h1>
                    <p>Now that your eyes are open</p><br />
                    <hr className="footerhr" />
                </div>
                <div className="copywrite">
                    <p>@ 2022 D.Y. Patil Robotics & Ai Club</p>
                    <p>All Rights Reserved.</p>
                </div>
                <div className="Menu">
                    <div className="headmenu"><strong>Menu</strong> <br /></div>
                    <div className="menuopt">
                        <p className="menuoptions">Home</p>
                        <p className="menuoptions">About</p>
                        <p className="menuoptions">Achievements</p>
                        <p className="menuoptions">Projects</p>
                        <p className="menuoptions">Contact</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
