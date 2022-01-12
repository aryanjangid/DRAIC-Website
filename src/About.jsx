import React from "react";
import "./about.css";
import flag from "./imgs/flag.png"
import heart from "./imgs/heart.png"
import star from "./imgs/star.png"
import mech from "./imgs/mech.png"
import programming from "./imgs/programming.png"
import electrical from "./imgs/electrical.png"






function About(){ 
    return (
    <>
  
  <div className="aboutmain">
    <div className="about-title"><p>Who we are and <br></br> why we are doing this</p></div>
    <div className="about-text"><p> Who vdsv vesv vv svv  gvavavgvverv xcvxvvxvxv <br></br> lkvjbv vvfv fadv z zdavearvhv'pih</p></div>
    <div className="testimonial-grid">
      <article className="testimonial flow bg-secondary-400 text-neutral-100 ">
        <div className="flex">
          <div>
            <img  src={flag} alt=""/>
          </div>
          <div>
            <h2 className="name">Who are we</h2>
            
          </div>
        </div>
        
        <p className="position">
          “  I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
          The next 12 weeks was the best - and most grueling - time of my life. Since completing
          the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
        </p>
      </article>
      <article className="testimonial flow bg-secondary-400 text-neutral-100">
        <div className="flex">
          <div>
            <img src={star} alt=" "/>
          </div>
          <div>
            <h2 className="name">Mission</h2>
            
          </div>
        </div>
       
        <p className="position">
          “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
          for a big company. This was one of the best investments I’ve made in myself. ”
        </p>
      </article>
      </div>
      <div className="row2">
     
       <article className="testimonial grid-col-span-2 flow bg-secondary-400 text-neutral-100">
        <div className="flex">
          <div>
            <img src={heart} alt=""/>
          </div>
          <div>
            <h2 className="name">Vision</h2>
            
          </div>
        </div>
        
        <p className="position">
          “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
          while doing something I love. ”
        </p>
      </article>
      
     
      
      <article className="testimonial  flow bg-secondary-500 text-neutral-100">
        <div className="flex">
          
          <div>
            <h2 className="name"><strong>50+</strong></h2>
            <p className="subscript">Members</p>
          </div>
        </div>
        
      </article>
      <article className="testimonial flow bg-secondary-500 text-neutral-100">
        <div className="flex">
        
          <div>
            <h2 className="name"><strong>50+</strong></h2>
            <p className="subscript">Alumni</p>
            {/* <p className="position">Verified Graduate</p> */}
          </div>
        </div>
       
    
      </article> 
     
      <article className="testimonial  flow bg-secondary-500 text-neutral-100">
        <div className="flex">
          
          <div>
            <h2 className="name"><strong>50+</strong></h2>
            <p className="subscript">Projects</p>
            {/* <p className="position">Verified Graduate</p> */}
          </div>
        </div>
       
       
      </article>
      <article className="testimonial flow bg-secondary-500 text-neutral-100">
        <div className="flex">
        
          <div>
          <h2 className="name"><strong>50+</strong></h2>
          <p className="subscript">Achievements</p>
            {/* <p className="position">Verified Graduate</p> */}
          </div>
        </div>
    
      </article> 
      </div>
    
    
    <div className="dept">
        <div className="dept-title"><p>OUR DEPARTMENTS</p></div>
        <div className="dept-grid">
        <article className="dept-grid-box flow bg-black text-neutral-100 border-primary-400">
        
          <div>
          <img className="dept-img" src={programming} alt="Programming Department" />
          <p className="dept-name">Programming Department</p>
          </div>
          
        <div className="dept-content">
        <p>
          I received a job offer mid-course, and the subjects I learned were current, if not more so,
          in the company I joined. I honestly feel I got every penny’s worth.
        </p>
        </div>
     
      </article>
      <article className="dept-grid-box flow bg-black text-neutral-100 border-primary-400">
        
        <div>
        <img className="dept-img" src={mech} alt=""/>
          <p className="dept-name">Mechanical Department</p>
        </div>
       
        <div className="dept-content">
      <p>
        I received a job offer mid-course, and the subjects I learned were current, if not more so,
        in the company I joined. I honestly feel I got every penny’s worth.
      </p>
      </div>
   
    </article>
    <article className="dept-grid-box flow bg-black text-neutral-100 border-primary-400">
        
        <div>
          <img className="dept-img" src={electrical} alt="" />
          <p className="dept-name">Electrical Department</p>
        </div>
        <div className="dept-content">
        <p>
        I received a job offer mid-course, and the subjects I learned were current, if not more so,
        in the company I joined. I honestly feel I got every penny’s worth.
      </p>
        </div>
      
      
      
   
    </article>
      </div>
      
    </div>
  
    </div>
 
</>

)}


export default About
