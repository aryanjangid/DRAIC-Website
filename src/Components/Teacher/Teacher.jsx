import React, { useEffect } from "react";
import "./Teacher.css";
import { Link } from "react-router-dom";
import mentorinfo from "../../Data/home-mentor";
import AOS from "aos";

// import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="home-teacher-component">
        {/* <div className="seperator"> */}
        <div className="home-teacher-header">
          <h1 data-aos={"zoom-in-up"} className="home-teacher-moto">
            THE FACE THAT GUIDES US
          </h1>
          <div
            data-aos={"zoom-in-up"}
            data-aos-delay={"1000"}
            className="home-teacher-seperator"
          >
            <div className="home-teacher-decoration-line1"></div>
            <div>
              <h1 className="home-teacher-title">OUR MENTOR</h1>
            </div>
            <div className="home-teacher-decoration-line2"></div>
          </div>
        </div>
        {/* </div> */}
        <div className="home-teacher-content">
          {mentorinfo.map((card) => {
            return (
              <>
                <div className="home-teacher-image-container">
                  <img
                    className="home-teacher-image"
                    src={card.imgURL}
                    alt="imgx"
                  ></img>
                </div>
                <div className="home-teacher-text">
                  <h1 className="home-teacher-name">{card.mentor_name}</h1>
                  <p className="home-teacher-paragraph">{card.content}</p>
                  <div className="teacher-footer">
                    <Link
                      className="footer_social_links"
                      to={card.linkedURL}
                      target="_blank"
                    >
                      <img
                        className="teacher_social_img"
                        src="https://img.icons8.com/color/48/000000/linkedin.png"
                        alt="Linkedin"
                      />
                    </Link>
                    <Link
                      className="footer_social_links"
                      to={card.instagramURl}
                      target="_blank"
                    >
                      <img
                        className="teacher_social_img"
                        src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                        alt="Linkedin"
                      />
                    </Link>
                    <Link
                      className="footer_social_links"
                      to={card.twitterURL}
                      target="_blank"
                    >
                      <img
                        className="teacher_social_img"
                        src="https://img.icons8.com/color/48/000000/twitter-squared.png"
                        alt="Linkedin"
                      />
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Main;
