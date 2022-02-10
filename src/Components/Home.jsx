import React from 'react';
import Project from './Projects-home';

import Landingslide from './Landingslide';
import Deck from './deck';

function Home() {
  return (
    <div>
      <Landingslide />
      
      <Deck />
      <Project />
    </div>
  );
}

export default Home;



