import React from "react";
import "./card.css";
// import immg from './photos/picc.jpg'
// import { Link } from "react-router-dom";
import linkedin from "../../Assets/linkedin.svg";

function Card(props) {
  const linkedIcon =
    props.display === "show"
      ? "core_team_social_img show"
      : "core_team_social_img";
  return (
    <div
      className="maincard"
      style={{
        ...styles.card,
        backgroundColor: props.color,
        left: `${props.x}px`,
        top: `${props.y}px`,
        zIndex: props.z_index,
        opacity: props.opacity,
        transform: `translate(-50%,-50%) scale(${props.scale})`,
        borderRadius: `${props.borderRadius}px`,
        // display:'${props.new_display}';
      }}
    >
      <img
        data-aos={"zoom-out"}
        data-aos-delay={"100"}
        loading="lazy"
        decoding="async"
        style={styles.image}
        src={props.picsum_img}
        alt="reactjs"
      ></img>

      <h1 className="namee">
        {props.name}
        <br></br>
        {props.surname}
      </h1>
      <div className="ll"></div>
      <h4 className="pos">{props.dep} </h4>
      <a
        className="footer_social_links"
        href={props.linkedin}
        rel="noreferrer"
        target="_blank"
      >
        <img
          loading="lazy"
          decoding="async"
          className={linkedIcon}
          src={linkedin}
          alt=""
        />
      </a>
    </div>
  );
}

//, backgroundColor:props.color, left:'${props.x}px' , top:'${props.y}px'

const styles = {
  card: {
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "400px",
    width: "300px",
    backgroundColor: "red",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    boxSizing: "border-box",
    borderRadius: "10px",
  },
  image: {
    width: "300px",
    height: "400px",
    borderRadius: "5px",
    zIndex: "3",
    objectFit: "cover",
  },
  department: {
    color: "white",
  },
};
export default Card;
