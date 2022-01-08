import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Home from './Components/Home.jsx';
import Project from './Components/Project.jsx';
import Contact from './Contact.jsx';
import Achivement from './Achivements.jsx';
import About from './About.jsx';
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import { Route, Navigate } from 'react-router-dom';
import { Routes } from "react-router-dom";
import Background from './Components/Background';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/achivements" element={<Achivement />} />
        <Route exact path="/project" element={<Project />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Project />
      <Background className="particles" />
      <Footer />
    </div>
  );
}

export default App;
