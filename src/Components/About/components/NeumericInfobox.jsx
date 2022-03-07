import React from "react";
import "./neumericinfo.css";

const NeumericInfobox = ({ NeumericTitle }) => {
  return (
    <div className="neumeric-card-body">
      <h1 className="neumeric-info">50+</h1>
      <div className="neumeric-card-title">{NeumericTitle}</div>
    </div>
  );
};

export default NeumericInfobox;
