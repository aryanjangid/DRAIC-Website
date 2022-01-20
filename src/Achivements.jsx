import React from "react";
import "./avhi.css"
import xyz from "./Assets/ac.jpg"
// const images = [xyz]
const image = xyz
const Main = () => {

  return (
    <>
      <div className="timeline">
        <div><h1 className="achievements">Achievements</h1></div>
        <div className="container left">
          <div className="content">
            <div className="contents">
              <h2>Shreyash Choppawar, Amit Prasad, Vedansh Shrivastav</h2>
              <p>
                Second Runner-up at Innovate for Smart Pimpri Chinchwad, innovation Challenge organised by PCSCL, PCMC & PCCOE, Pune.
              </p>
            </div>
            <div className="image-conainer">
              <img className="image" src={image} alt="" />

            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="image-conainer">
              <img className="image" src={image} alt="" />
            </div>
            <div className="contents">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non
              </p>
            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <div className="contents">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non
              </p>
            </div>
            <div className="image-conainer">
              <img className="image" src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="image-conainer">
              <img className="image" src={image} alt="" />
            </div>
            <div className="contents">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non
              </p>
            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <div className="contents">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non
              </p>
            </div>
            <div className="image-conainer">
              <img className="image" src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="image-conainer">
              <img className="image" src={image} alt="" />
            </div>
            <div className="contents">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;