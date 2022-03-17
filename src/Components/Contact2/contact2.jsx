import React from "react";
import { Link } from "react-router-dom";
import "./contact2.css";
export default function contact2({ show }) {
  return (
    <div
      style={{ display: show ? "none" : "block" }}
      className="contact-btn-container"
    >
      <Link to="/contact" className="contact-btn-all">
        <div className="contact_btn_home">
          <div className="contact-btn-continer">
            <div className="contact-us-btn-text">Contact Us</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
