import React, { useState, useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";

import leftArrow from "./assets/arrow-left.svg";
import rightArrow from "./assets/arrow-right.svg";

import "./Main.scss";

const team = [
  {
    name: "Prathis Upadhaya",
    title: "Programming Head, DRAIC",
    image: `${require("./assets/image.jpg")}`,
  },
  {
    name: "Doraemon",
    title: "Mechanical Department Head, DRAIC",
    image: `${require("./assets/image2.png")}`,
  },
  {
    name: "Nobita Nobi",
    title: "Electrical Department Head, DRAIC",
    image: `${require("./assets/image3.jpeg")}`,
    }
];

const Main = () => {
  let imageList = useRef(null);
  let teamList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  });

  useEffect(() => {
    gsap.to(teamList.children[0], 0, {
      opacity: 1
    },0.3);
  }, []);

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    gsap.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut
    },0.3);
  };

  const slideRight = (index, duration, multiplied = 1) => {
    gsap.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut
    },0.3);
  };

  const scale = (index, duration) => {
    gsap.from(imageList.children[index], duration, {
      scale: 0.5,
      ease: Power3.easeOut
    },0.3);
  };

  //Content transition

  const fadeOut = (index, duration) => {
    gsap.to(teamList.children[index], duration, {
      opacity: 0
    },0.3);
  };

  const fadeIn = (index, duration) => {
    gsap.to(teamList.children[index], duration, {
      opacity: 1,
      delay: 1
    },0.3);
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };
  return (
    <>
    <h1 className="our-team">Our Team</h1>
    <div className="leads">
      <div className="lead1">
        <div>
        <img className="image" src={`${require("./assets/image3.jpeg")}`} />
        </div>
        <div className="content">
          <h1>bhaiyaa</h1>
          <p>president</p>
        </div>
      </div>
      <div className="lead2">
        <div className="content">
          <h1>didi</h1>
          <p>pr lead</p>
        </div>
        <div>
        <img className="image" src={`${require("./assets/image3.jpeg")}`} />
        </div>      </div>
    </div>
    <div className="team-section">
      <div className="our-team">
        <h1>Our Heads</h1>
        <p>Abcdefghijklmnopqrstuvwxyz</p>
        <p>Abcdefghijklmnopqrstuvwxyz<br/>Abcdefghijklmnopqrstuvwxyz<br/>Abcdefghijklmnopqrstuvwxyz<br/>Abcdefghijklmnopqrstuvwxyz<br/>Abcdefghijklmnopqrstuvwxyz<br/>Abcdefghijklmnopqrstuvwxyz<br/></p>
      </div>
      <div className="team-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>
        <div className="inner">
          <div className="t-image" style={{borderRadius:"20px"}}>
            <ul ref={el => (imageList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={team[0].image} alt={team[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={team[1].image} alt={team[0].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={team[2].image} alt={team[0].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul ref={el => (teamList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{team[0].name}</p>
                  <h3 className="name">{team[0].title}</h3>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{team[1].name}</p>
                  <h3 className="name">{team[1].title}</h3>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{team[2].name}</p>
                  <h3 className="name">{team[2].title}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrows right" onClick={nextSlide}>
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Main;