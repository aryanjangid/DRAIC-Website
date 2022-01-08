import React from "react";
import draicimage from '../Assets/logo_white.png';
function Landingslide() {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 className="text">D.Y. Patil Robotics & AI CluB<br></br>
                        DYPCOE, Pune</h1>
                </div>
                <div class="col">
                    <img className="draicimage" src={draicimage} alt="draicmage" />
                </div>

            </div>
        </div>

    )
}
export default Landingslide
