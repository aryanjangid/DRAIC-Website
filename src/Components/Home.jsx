import React from 'react';
import Project from './Projects-home';

import Landingslide from '../Components/LandingSlide/Landingslide';
// import Deck from './CoreTeam/deck';
import Dec2 from './CoreTeam/deck2';
// import HomeAbout from './About-home';
import Homeabouttemp from "./AboutTemp/About-temp";

function Home() {
  return (
    <div>
      <Landingslide />
      <Homeabouttemp/>
      {/* <HomeAbout/> */}
      <Dec2/>
      <Project />
    </div>
  );
}

export default Home;



