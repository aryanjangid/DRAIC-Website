import React from 'react';
function Contact() {
  return (

    <div className='contactusouter'>
      <div className="grid-container-contactus">
        <div className="item1">
          <h1 className="get-in-touch">GET IN TOUCH</h1>
          <hr className="line" /><br></br>
          <h3 className="send-email-line">
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </h3>
        </div>
        <div className="item2">
          <form>
            <input type="text" id="fname" name="fname" placeholder="Name" />
          </form>
        </div>
        <div className="item3">
          <form>
            <input type="text" id="lname" name="lname" placeholder="Email" />
          </form>
        </div>

        <div className="item4">
          <h1 className="contact-info">Contact Info</h1>
          <img className="img-t1" alt="email" src="https://img.icons8.com/material-rounded/24/ffffff/new-post.png" />
          <h1 className="t1">
            Email
          </h1><br></br>
          <h1 className="info-t1">daricdypcoe@gmail.com</h1>

          <img className="img-t1" alt="phone" src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png" />
          <h1 className="t1">
            Phone
          </h1><br></br>
          <h1 className="info-t1">+919856324566</h1>
          <img className="img-t1" alt="email" src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" />
          <h1 className="t1">
            linkedin
          </h1><br></br>
          <h1 className="info-t1">daricdypcoe@gmail.com</h1>
        </div>


        <div className="item5">
          <textarea className="message-box" id="subject" name="message" placeholder="Message"></textarea>
        </div>


        <div className="item6">
          <button className='send-button'>
            Send
          </button>
        </div>

      </div>
    </div>

  );
}

export default Contact;
