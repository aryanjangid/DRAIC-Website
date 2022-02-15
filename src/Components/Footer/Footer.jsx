import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import logo from "../../Assets/logo_white.png"

const Footer = () => {
    return (
        <>
        <div className="footer_section">
            <div className="footer">
                <div className='footer_intro'>
                    <img src={logo} className="footer_image" alt="draicimg" />
                    <h1>DRAIC DYPCOE</h1>
                    <p>Let's ready to dive into Robotics</p>
                </div>
                <div className='footer_links_section'>
                <div className='footer_links'>
                    <h1 className='footer_links_name'>LINKS</h1>
                    <ul>
                        <li className='footer_link'><a>Home</a></li>
                        <li className='footer_link'><a>Projects</a></li>
                        <li className='footer_link'><a>Achievements</a></li>
                        <li className='footer_link'><a>About Us</a></li>
                        <li className='footer_link'><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className='footer_links'>
                    <h1 className='footer_links_name'>TEAMS</h1>
                    <ul>
                        <li className='footer_link'><a>Programming</a></li>
                        <li className='footer_link'><a>Mechanical</a></li>
                        <li className='footer_link'><a>Electrical</a></li>
                    </ul>
                </div>
                </div>
                <div className='footer_address'>
                    <div className='footer_locate'>
                        <img alt=" " className='footer_location_pin' src="https://img.icons8.com/color-glass/48/4a90e2/google-maps-new.png"/>
                        <h1 className='footer_locateus'>Locate Us</h1>
                    </div>
                    <p className='footer_location'>D. Y. Patil College of Engineering, D. Y. Patil<br/>Educational Complex, Sector 29, Nigdi<br/>Pradhikaran, Akurdi, Pune 411044.</p>
                </div>
                <div className='footer_social'>
                    <Link className='footer_social_links' to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img className='footer_social_img' src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin"/></Link>
                    <Link className='footer_social_links' to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img className='footer_social_img' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="Instagram" /></Link>
                    <Link className='footer_social_links' to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img className='footer_social_img' src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="Twitter"/></Link>
                </div>
            </div>
            <div className="footer_copyrights">
                <div class="Footerdevicer"></div>
                <p>@ 2022 D.Y. Patil Robotics & Ai Club <br />
                All Rights Reserved.</p>
            </div>
        </div>  
        </>
    )
}

export default Footer
