import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Link className="footer-link" to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><ion-icon name="logo-linkedin"></ion-icon></Link>
            </div>
            <div className="background"></div>
        </>
    )
}

export default Footer
