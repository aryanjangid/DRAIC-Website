import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./Events.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Events = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div className="tests-section-container">
      <div className="outer-event">
        {" "}
        <div className="firstrow">
          <h1 data-aos={"zoom-out"} className="wheredowe">
            WHY SHOULD YOU JOIN US?
          </h1>
          <div className="seperator">
            <div
              data-aos={"fade-right"}
              data-aos-delay={"700"}
              className="lineaboutus1"
            ></div>
            <div className="events-upcoming-events">
              <h1
                data-aos={"zoom-out"}
                data-aos-delay={"700"}
                className="aboutusheading"
              >
                TESTIMONIALS
              </h1>
            </div>
            <div
              data-aos={"fade-left"}
              data-aos-delay={"700"}
              className="lineaboutus2"
            ></div>
          </div>
        </div>
        <div className="carousel_container">
          <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="inner"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, { width: "100%" });
              })}
            </div>
            <div className="indicators">
              <button
                className="left-btn"
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
              >
                &#9001;&nbsp;&nbsp;
              </button>
              {/* {React.Children.map(children, (child, index) => {
              return (
                <button
                  className={`${index === activeIndex ? "active" : ""}`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  {index + 1}
                </button>
              );
            })} */}
              <button
                className="left-btn right"
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
              >
                &nbsp;&nbsp;&nbsp;&#9002;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
