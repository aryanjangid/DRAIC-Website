import React from "react";
import "./neumericinfo.css";

const NeumericInfobox = ({ NeumericTitle, n }) => {
  return (
    <div className="neumeric-card-body">
      <h1 className="neumeric-info">{n}</h1>
      <div className="neumeric-card-title">{NeumericTitle}</div>
    </div>
  );
};
export default NeumericInfobox;
