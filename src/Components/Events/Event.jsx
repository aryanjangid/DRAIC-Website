import React from "react";
import "./Event.css";
import Events, { CarouselItem } from "./Events";
import a from "../../Assets/Gallery/download.jpg";

const data = [
  {
    name: "hello",
    description: "hello again",
  },
  {
    name: "hello",
    description: "hello again",
  },
  {
    name: "hello",
    description: "hello again",
  },
];

const Event = () => {
  return (
    <>
      <Events>
        {data.map((event, i) => (
          <CarouselItem>
            <div className="event_container">
              <div className="event_image_container">
                <img className="event_img" src={a} />
              </div>
              <div className="event_content_container">
                <h1 className="event_name">{event.name}</h1>
                <p className="event_description">{event.description}</p>
                <div className="event_separator"></div>
                <button className="event_btn">Register</button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Events>
    </>
  );
};

export default Event;
