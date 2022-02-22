import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact_main_body'>
      <div className="contact_headline_div">
        <h1 className="contact_headline">OPPORTUNITIES DON'T HAPPEN, YOU CREATE THEM</h1>
      </div>
      <div className="contactus_seperator">
        <div className="contactusline1"></div>
        <div className='contact_topic'>
          <h1 className="contactusheading">GET IN TOUCH</h1>
        </div>
        <div className="contactusline2"></div>
      </div>
      <div className="contact_form_details">
        <div>
          <div className="contact_fillform_div">
            <h3 className="contact_fillform">Please fill out the form below to connect.</h3>
          </div>
          <form action="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program" className="leftform" method='POST'>
            <div className="contact_name_email_div">
              <div className="contact_form_name">
                <input type="text" id="fname" name="fname" placeholder="Name" required />
              </div>
              <div className="contact_form_email">
                <input type="email" id="lname" name="email" placeholder="Email" required />
              </div>
            </div>
            <div className="contact_form_textarea_div">
              <textarea className="contact_textarea" id="subject" name="message" placeholder="Message" required></textarea>
            </div>
            <div className="contact_sendbtn_div">
              <button className='contact_sendbtn'>Send</button>
            </div>
          </form>
        </div>
        <div className="contact_information_div">
          <h1 className="contact_info_headline">CONTACT INFORMATION</h1>
          <div className="contact_info_email_div">
            <img className="contact_icons" alt="email" src="https://img.icons8.com/material-rounded/24/ffffff/new-post.png" />
            <div className="contact_infoemail">
              <h1 className="contact_info_subhead">Email</h1>
              <h1 className="contact_all_information">daricdypcoe@gmail.com</h1>
            </div>
          </div>
          <div className="contact_info_phone_div">
            <img className="contact_icons" alt="phone" src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png" />
            <div className="contact_infophone">
              <h1 className="contact_info_subhead">Phone</h1>
              <h1 className="contact_all_information">+919856324566</h1>
            </div>
          </div>
          <div className="contact_info_linkedin_div">
            <img className="contact_icons" alt="linkedin" src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" />
            <div className="contact_infolink">
              <h1 className="contact_info_subhead">linkedin</h1>
              <h1 className="contact_all_information">daricdypcoe@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;
