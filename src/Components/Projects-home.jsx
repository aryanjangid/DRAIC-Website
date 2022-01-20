import React from "react";
import pic1 from "../Assets/project1.jpg"
import pic2 from "../Assets/project2.jpg"
import pic3 from "../Assets/project3.jpg"
// import "../style.css";

function Project() {
    return (
        <div className="projects">
            <div className="background">
                <h2 className="title2"><span>Our Top Projects</span></h2>
                <div className="grid">
                    <div className="grid-item">
                        <div className="card">
                            <img className="card-img1" src={pic1} alt="Rome" />
                            <div className="card-content">
                                <h1 className="card-header">Autonomous Quadrupled Robot</h1>
                                <p className="card-text">
                                    Development of 3D Printed Autonomous four-legged robot with Servo Motors for actuation.
                                </p>
                                <button className="card-btn">Know More<span>&rarr;</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img
                                className="card-img2"
                                src={pic2}
                                alt="Grand Canyon"
                            />
                            <div className="card-content">
                                <h1 className="card-header">Customized 3D Printer</h1>
                                <p className="card-text">
                                    Developed a customized 3D Printer, with PLA as a filament by utilizing some open source resources.
                                </p>
                                <button className="card-btn">Know More<span>&rarr;</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img className="card-img3" src={pic3} alt="Maldives" />
                            <div className="card-content">
                                <h1 className="card-header">Autonomous Path Finder Robot</h1>
                                <p className="card-text">
                                    Made an Autonomous Obstacle avoider and Path finder robot with Omni Wheel drive and Ultrasonic Sensor.
                                </p>
                                <button className="card-btn">Know More<span>&rarr;</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project

