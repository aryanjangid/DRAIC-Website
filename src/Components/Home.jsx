import React from 'react';
import Project from './Projects-home';

import Landingslide from './Landingslide';
import Deck from './deck';
import HomeAbout from './About-home';

function Home() {
  return (
    <div>
      <Landingslide />
      <HomeAbout/>
      <Deck />
      <Project />
    </div>
  );
}

export default Home;



