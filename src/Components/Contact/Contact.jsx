import React, { useEffect } from "react";
import "./Contact.css";
// import jointeam from './jointeam1.gif'

import AOS from "aos";
// import { NavLink } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="contact_main_body">
        <div className="contact_headline_div">
          <h1 data-aos={"zoom-in-up"} className="contact_headline">
            LET'S HAVE A CHAT OR SPONSOR US!
          </h1>
        </div>
        <div className="contactus_seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="contactusline1"
          ></div>
          <div className="contact_topic">
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="contactusheading"
            >
              GET IN TOUCH
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="contactusline2"
          ></div>
        </div>
        <div className="contact_form_details">
          <div
            className="join_team"
            data-aos={"fade-right"}
            data-aos-delay={"1500"}
          >
            <div className="contact_fillform_div">
              <h3 className="contact_fillform fillform2">
                Please fill the form to Join the Team{" "}
              </h3>
            </div>
            <div>
              <div className="contact_para">
                <p>
                  If you're interested in what we do and wanna join us,or have some queries, feel free to contact us by filling the form below!
                </p>
              </div>
            </div>
            <div className="contact_joinnow_div">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSehFE3hKyx7Shkl2x72KWDIsheS1TgHENWEueiYNj53h8kuhw/viewform"
                rel="noreferrer"
                target="_blank"
              >
                {/* <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSehFE3hKyx7Shkl2x72KWDIsheS1TgHENWEueiYNj53h8kuhw/viewform?usp=sf_link" > */}
                <button className="contact_joinnowbtn">JOIN NOW</button>
                {/* </NavLink> */}
              </a>
            </div>
          </div>

          <div
            data-aos={"fade-left"}
            data-aos-delay={"1500"}
            className="contact_information_div"
          >
            <h1 className="contact_info_headline">CONTACT INFORMATION</h1>
            <div className="contact_info_email_div">
              <img
                loading="lazy"
                decoding="async"
                className="contact_icons"
                alt="email"
                src="https://img.icons8.com/material-rounded/24/ffffff/new-post.png"
              />
              <div className="contact_infoemail">
                <h1 className="contact_info_subhead">Email</h1>
                <h1 className="contact_all_information">
                  draicdypcoe@gmail.com
                </h1>
              </div>
            </div>
            <div className="contact_info_phone_div">
              <img
                loading="lazy"
                decoding="async"
                className="contact_icons"
                alt="phone"
                src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png"
              />
              <div className="contact_infophone">
                <h1 className="contact_info_subhead">Phone</h1>
                <h1 className="contact_all_information">+91 7007889803</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      {/* <div className="contact_main_body2">
        <div className="contact_headline_div forces2">
          <h1 data-aos={"zoom-in-up"}  data-aos-delay={"100"}  className="contact_headline" >
            LET'S JOIN FORCES
          </h1>
        </div> */}
      {/* <div className="contactus_seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"400"}
            className="contactusline1"
          ></div>
          <div className="contact_topic">
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"700"}
              className="contactusheading"
            >
              WANT TO JOIN US
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"400"}
            className="contactusline2"
          ></div> */}
      {/* </div>
        <div className="contact_form_details">
          <div className="join_team"  data-aos={"fade-right"}  data-aos-delay={"1500"}>
            <div className="contact_fillform_div">
              <h3 className="contact_fillform fillform2">
                Please fill the form to Join the Team{" "}
              </h3>
            </div>
            <div>
              <div className="contact_para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, repellendus excepturi. Architecto porro rem fuga ipsum
                  vero earum inventore nemo delectus ducimus est. Harum optio
                  dolore ea nostrum tempora at?
                </p>
              </div> */}
      {/* </div>
            <div className="contact_joinnow_div">
              <button className="contact_joinnowbtn">JOIN NOW</button>
            </div>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"600"}
            className="contact_information_div"
          > */}
      {/* <iframe className="jointeam_img" src="https://giphy.com/embed/g2RNvrGx6bffjE6hgt"  frameBorder="0" ></iframe><p></p> */}

      {/* <img className="jointeam_img" src={jointeam} alt="" />
          </div>
        </div>
      </div>  */}
      {/* 
      <img
        loading="lazy"
        decoding="async"
        className="jointeam_img"
        src={jointeam}
        alt=""
      /> */}
    </>
  );
};

export default Contact;
