import React from "react";
import HomeProject from "./Home Projects/Projects-home";

import Landingslide from "../Components/LandingSlide/Landingslide";
import HomeAbout from "./Home About Us/Home-aboutus.jsx";
import Dec2 from "./CoreTeam/deck2";

import Teacher from "./Teacher/Teacher";
import Testimonials from "./Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Landingslide />
      <HomeAbout />
      <Teacher />
      <Dec2 />
      <Testimonials />
      <HomeProject />
    </div>
  );
}

export default Home;
