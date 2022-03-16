import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";
import testimonials from "../../Data/testimonials";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial-section-container">
        <div className="testimonial_header">
          <div className="testimonial_headline_div">
            <h1 data-aos={"zoom-out"} className="wheredowe">
              {" "}
              WHY SHOULD YOU JOIN US?
            </h1>
          </div>
          <div className="testimonial_heading">
            <div
              data-aos={"fade-right"}
              data-aos-delay={"700"}
              className="testimonial_line_1"
            ></div>
            <div>
              <h1
                data-aos={"zoom-out"}
                data-aos-delay={"1200"}
                className="aboutusheading"
              >
                TESTIMONIALS
              </h1>
            </div>
            <div
              data-aos={"fade-left"}
              data-aos-delay={"700"}
              className="testimonial_line_2"
            ></div>
          </div>
        </div>
        <div className="testimonial-section">
          {/* <h1 className="testimonial-heading">
            <span className="underline"></span>Why our members ❤️ us
          </h1> */}
          {/* <p className="testimonial-para">
            Our client send us bunch of smiles with our services and we love
            them
          </p> */}
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
          interval={3100}
        >
          {testimonials.map((test, i) => (
            <div className="testimonial-card-container">
              <img
                loading="lazy"
                decoding="async"
                src={test.image}
                alt="loading"
              />
              <div className="myCarousel">
                <h3>{test.name}</h3>
                <h4>{test.position}</h4>
                <p>{test.test}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
