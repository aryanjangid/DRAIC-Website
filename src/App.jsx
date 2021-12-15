import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import Home from './Components/Home.jsx';
import Project from './Components/Project.jsx';
import Contact from './Contact.jsx';
import Achievement from './Achievements.jsx';
import About from './About.jsx';
import Navbar from "./Components/Navbar.jsx"
import {Route,Navigate } from 'react-router-dom';
import {Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/achievements" element={<Achievement/>} />
      <Route exact path="/project" element={<Project/>} />
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
    </div>
  );
}

export default App;
