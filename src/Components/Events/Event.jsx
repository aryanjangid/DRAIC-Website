import React from "react";
import "./Event.css";
import Events, { CarouselItem } from "./Events";
import a from "../../Assets/Gallery/download.jpg";

const data = [
  {
    name: "ROBOT WORKSHOP",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    name: "Robot Workshop",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    name: "Robot Workshop",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
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
                <img className="event_img" src={a} alt="" />
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
