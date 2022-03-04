import React from "react";

function Avatar(props) {
  return (
    <img
      loading="lazy"
      decoding="async"
      className="profile-img"
      src={props.img}
      alt="profile icture"
    ></img>
  );
}
export default Avatar;
