import React from "react";
import "./infocard.css";
const InfoCard = ({ contentText, cardIcon, cardTitle }) => {
  return (
    <article className="about-info-card">
      <div className="about-card-title">
        <div className="about-content-iconbox">
          <img
            loading="lazy"
            decoding="async"
            className="about-content-icon"
            src={cardIcon}
            alt={cardTitle}
          />
        </div>
        <div>
          <h2 className="about-content-title">{cardTitle}</h2>
        </div>
      </div>
      <p className="about-content-text">{contentText}</p>
    </article>
  );
};

export default InfoCard;
