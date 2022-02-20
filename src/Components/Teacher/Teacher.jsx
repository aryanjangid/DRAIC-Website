import React from 'react'
import './Teacher.css'

function Teacher() {
    return (
        <>
            <div className='home-teacher-component'>
                {/* <div className="seperator"> */}
                <div className="home-teacher-header">
                    <h1 className="home-teacher-moto">THE FACE THAT GUIDES US</h1>
                    <div className="home-teacher-seperator">
                        <div className="home-teacher-decoration-line1"></div>
                        <div>
                            <h1 className="home-teacher-title">OUR MENTOR</h1>
                        </div>
                        <div className="home-teacher-decoration-line2"></div>
                    </div>
                </div>
                {/* </div> */}
                <div className="home-teacher-content">
                    <div className='home-teacher-image-container'>
                        <img className='home-teacher-image' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="imgx"></img>
                    </div>
                    <div className="home-teacher-text">
                        <h1 className='home-teacher-name'>ARYAN JANGID</h1>
                        <p className='home-teacher-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium commodi aliquam vero voluptates labore laboriosam id maxime explicabo animi, tenetur, sapiente suscipit harum inventore autem quam minima asperiores a illum? </p>
                        <div className="teacher-footer">
                            <img className='teacher_footer_social_img' src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin" />
                            <img className='teacher_footer_social_img' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="Linkedin" />
                            <img className='teacher_footer_social_img' src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="Linkedin" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Teacher;