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
          <h1 data-aos={"zoom-out"} className="home-teacher-moto">
            THE FACE THAT GUIDES US
          </h1>
          <div className="home-teacher-seperator">
            <div
              data-aos={"fade-right"}
              data-aos-delay={"700"}
              className="home-teacher-decoration-line1"
            ></div>
            <div>
              <h1
                data-aos={"zoom-out"}
                data-aos-delay={"1200"}
                className="home-teacher-title"
              >
                OUR MENTOR
              </h1>
            </div>
            <div
              data-aos={"fade-left"}
              data-aos-delay={"700"}
              className="home-teacher-decoration-line2"
            ></div>
          </div>
        </div>
        {/* </div> */}
        <div className="home-teacher-content">
          {mentorinfo.map((card) => {
            return (
              <>
                <div
                  data-aos={"zoom-out"}
                  data-aos-delay={"900"}
                  className="home-teacher-image-container"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    className="home-teacher-image"
                    src={card.imgURL}
                    alt="imgx"
                  ></img>
                </div>
                <div className="home-teacher-text">
                  <h1
                    data-aos={"zoom-out"}
                    data-aos-delay={"1000"}
                    className="home-teacher-name"
                  >
                    {card.mentor_name}
                  </h1>
                  <p
                    data-aos={"zoom-out"}
                    data-aos-delay={"1100"}
                    className="home-teacher-paragraph"
                  >
                    {card.content}
                  </p>
                  <div className="teacher-footer">
                    <Link
                      data-aos={"zoom-in"}
                      data-aos-delay={"1150"}
                      className="footer_social_links"
                      to={card.linkedURL}
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        className="teacher_social_img"
                        src="https://img.icons8.com/color/48/000000/linkedin.png"
                        alt="Linkedin"
                      />
                    </Link>
                    <a
                      data-aos={"zoom-in"}
                      data-aos-delay={"1150"}
                      className="footer_social_links"
                      to="https://www.instagram.com/vipinvibhute/" 
                      rel=""
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        className="teacher_social_img"
                        src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                        alt="Linkedin"
                      />
                    </a>
                    <Link
                      data-aos={"zoom-in"}
                      data-aos-delay={"1150"}
                      className="footer_social_links"
                      to={card.twitterURL}
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
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
