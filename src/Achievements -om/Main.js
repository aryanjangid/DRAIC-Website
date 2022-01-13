import React from "react";
import "./Main.css";
import xyz from "./imgs/webdev.gif"
// import edu from "./imgs/edu.png"


const image=xyz
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
              <strong>-31 Dec 2021</strong>  
            </p>
            </div>
            <div className="image-conainer">
              <img className="image-left" src={image} alt="" />
              
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="image-conainer">
              <img className="image-right" src={image} alt="" />
            </div>
            <div className="contents">
            <h2>Shreyash Choppawar, Amit Prasad, Vedansh Shrivastav</h2>
            <p>
               <strong>31 Dec 2021</strong>            
            </p>
            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <div className="contents">
            <h2>Shreyash Choppawar, Amit Prasad, Vedansh Shrivastav</h2>
              <p>
                <strong>31 Dec 2021</strong>              
              </p>
            </div>
            <div className="image-conainer">
              <img className="image-left" src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="image-conainer">
              <img className="image-right" src={image} alt="" />
            </div>
            <div className="contents">
            <h2>Shreyash Choppawar, Amit Prasad, Vedansh Shrivastav</h2>
            <p>
            <strong>31 Dec 2021</strong>            
            </p>
            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <div className="contents">
            <h2>Shreyash Choppawar, Amit Prasad, Vedansh Shrivastav</h2>
              <p>
              <strong>31 Dec 2021</strong>              
              </p>
            </div>
            <div className="image-conainer">
              <img className="image-left" src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="image-conainer">
              <img className="image-right" src={image} alt="" />
            </div>
            <div className="contents">
            <h2>Shreyash Choppawar, Amit Prasad, Vedansh Shrivastav</h2>
            <p>
            <strong>31 Dec 2021</strong>            
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
