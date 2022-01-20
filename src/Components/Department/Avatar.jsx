import React from "react";

function Avatar(props){
    return(
        <img className="profile-img" src={props.img} alt="profile icture"></img>
    )
}
export default Avatar