import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";
import test from "../../Assets/image.jpg";

const testimonials = [
  {
    name: "Kanchan Sharma",
    position: "Data Science",
    test: "Great experience with the community.All the sessions were very helpful and understandable,Thank you for this wonderful opportunity to learn with you.",
    image: test,
  },
  {
    name: "Kanchan Sharma",
    position: "Data Science",
    test: "Great experience with the community.All the sessions were very helpful and understandable,Thank you for this wonderful opportunity to learn with you.",
    image: test,
  },
  {
    name: "Kanchan Sharma",
    position: "Data Science",
    test: "Great experience with the community.All the sessions were very helpful and understandable,Thank you for this wonderful opportunity to learn with you.",
    image: test,
  },
  {
    name: "Kanchan Sharma",
    position: "Data Science",
    test: "Great experience with the community.All the sessions were very helpful and understandable,Thank you for this wonderful opportunity to learn with you.",
    image: test,
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="testimonial-section-container">
        <div className="testimonial-section">
          <h1 className="testimonial-heading">
            <span className="underline"></span>Why our members ❤️ us
          </h1>
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
          autoPlay={true}
          interval={6100}
        >
          {testimonials.map((test, i) => (
            <div className="testimonial-card-container">
              <img src={test.image} />
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
