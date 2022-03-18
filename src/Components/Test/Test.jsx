import React from "react";
import "./Test.css";
import Events, { CarouselItem } from "./Tests";
import testimonials from "../../Data/testimonials";

const Event = () => {
  return (
    <>
      <Events>
        {testimonials.map((test, i) => (
          <CarouselItem>
            <div className="test_container">
              <div className="test_image_container">
                <img className="test_img" src={test.image} alt="" />
              </div>
              <div className="test_content_container">
                <h1 className="test_name">{test.name}</h1>
                <h4 className="test_position">{test.position}</h4>
                <p className="test_description">{test.test}</p>
                <div className="test_separator"></div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Events>
    </>
  );
};

export default Event;
