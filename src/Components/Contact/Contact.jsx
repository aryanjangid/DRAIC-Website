import React from 'react';
import styles from "./Contact.css"

function Contact() {
  return (
    <div className='contactusouter'>

      <div className="contfirstrow">
        <h1 className="contwheredowe">OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM</h1>
        <div className="seperator">
          <div className="contline1"></div>
          <div>
            <h1 className="contaboutusheading">GET IN TOUCH</h1>
          </div>
          <div className="contline2"></div>
        </div>

      </div>
      <div className="headingcontainer">
            <h3 className="send-email-line">
              Please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </h3>
      </div>
      <div className="fullform">
        <div className="leftside">
        <form action="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program" className="leftform" method='POST'>
          <div className="nameandemail">
            <div className="name">
              <input type="text" id="fname" name="fname" placeholder="Name" required/>  
            </div>
            <div className="emails">   
              <input type="email" id="lname" name="email" placeholder="Email" required/>
            </div>   
          </div> 
          <div className="textar">
            <textarea className="message-box" id="subject" name="message" placeholder="Message" required></textarea>
          </div>
          <div className="button">
            <button className='send-button'>Send</button>
          </div>
        </form>
        </div>
        <div className="rightside">
          <h1 className="contact-info">CONTACT INFORMATION</h1>
          <div className="email">
            <img className="img-t1" alt="email" src="https://img.icons8.com/material-rounded/24/ffffff/new-post.png" />
            <div className="infoemail">
              <h1 className="t1">Email</h1>
              <h1 className="info-t1">daricdypcoe@gmail.com</h1>
            </div>
          </div>
          <div className="phone">
            <img className="img-t1" alt="phone" src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png" />
            <div className="infophone">
              <h1 className="t1">Phone</h1>
              <h1 className="info-t1">+919856324566</h1>
            </div>
          </div>
          <div className="linkedin">       
            <img className="img-t1" alt="email" src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" />
            <div className="infolink">
              <h1 className="t1">linkedin</h1>
              <h1 className="info-t1">daricdypcoe@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;
