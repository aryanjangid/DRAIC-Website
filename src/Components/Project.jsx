import React from "react";
import pic1 from "../Assets/webdev.gif"
import pic2 from "../Assets/android.gif"
import pic3 from "../Assets/sde.gif"
// import "../style.css";

function Project() {
  return (
    <div className="projects">

      <h1 className="title">Our Top Servies</h1>
      <h2 className="title2"><span>Our Best Services</span></h2>
      <div className="grid">
        <div className="grid-item">
          <div className="card">
            <img className="card-img" src={pic1} alt="Rome" />
            <div className="card-content">
              <h1 className="card-header">Web Development</h1>
              <p className="card-text">
                Rome is known for its stunning <strong> architecture</strong>,
                with the Colleseum, Pantheon, and Trevi Fountain as the main
                attractions rich in its heritage and culture.
              </p>
              <button className="card-btn">Know More<span>&rarr;</span></button>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="card">
            <img
              className="card-img"
              src={pic2}
              alt="Grand Canyon"
            />
            <div className="card-content">
              <h1 className="card-header">Android Development</h1>
              <p className="card-text">
                One of the world's natural wonders, the iconic Grand Canyon draws
                oohs and aahs from visitors perched at the edge of its
                <strong>towering cliffs</strong>.
              </p>
              <button className="card-btn">Know More<span>&rarr;</span></button>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="card">
            <img className="card-img" src={pic3} alt="Maldives" />
            <div className="card-content">
              <h1 className="card-header">bsbuhfodsc</h1>
              <p className="card-text">
                The Maldives are known for their
                <strong>natural environment</strong> including the blue ocean,
                white beaches, and clean air, attracting tourists.
              </p>
              <button className="card-btn">Know More<span>&rarr;</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project
