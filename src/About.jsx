import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function About() {
  return (
    <div>
      <h1>About</h1>
      <NavLink activeClassName="active" aria-current="page" to="/progammingDepartment">pro</NavLink>
    </div>
  );
}

export default About;
