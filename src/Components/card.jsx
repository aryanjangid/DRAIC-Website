import React from "react";
import { NavLink } from "react-router-dom";
function Card(props) {
    return (
        <div style={{
            ...styles.card,
            backgroundColor: props.color,
            left: `${props.x}px`,
            top: `${props.y}px`,
            zIndex:props.z_index,
            opacity:props.opacity,
            transform:`translate(-50%,-50%) scale(${props.scale})`,
            borderRadius:`${props.borderRadius}px`,

            
             }}>

             <img style={styles.image} src={props.picsum_img} alt='reactjs'></img>
             <h1>{props.name}</h1>
             <h4>( {props.dep} )</h4>
             <NavLink activeClassName="active" aria-current="page" to="/progammingDepartment">
             <h4 style={styles.department}>[ View Department ]</h4>
             </NavLink>

        </div>
    )
}

//, backgroundColor:props.color, left:'${props.x}px' , top:'${props.y}px'

const styles = {
    card: {
        color:'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        height: '400px',
        width: '300px',
        backgroundColor: 'red',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        boxSizing: 'border-box',
        borderRadius:'30px',
    },
    image: {
        width:'100%',
        height:'100%',
        borderRadius:'30px'
    },
    department:{
        color:'white',
    }
}
export default Card
