import './App.css';
import React from 'react';
import Home from './Components/Home.jsx';
import Contact from './Contact.jsx';
import Achivement from './Achivements.jsx';
import About from './About.jsx';
import Project from './Project'
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import { Route, Navigate } from 'react-router-dom';
import { Routes } from "react-router-dom";
import Background from './Components/Background';
import Progdep from './Components/Department/progdep';
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
        <Route exact path="/progammingDepartment" element={<Progdep />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Background className="particles" />
      <Footer />
    </div>
  );
}

export default App;
