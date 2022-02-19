import React,{useEffect} from "react";
import "./Achievements.css"
import Achievements1 from "../../Assets/Achievements1.jpg"
import Achievements2 from "../../Assets/Achievements2.webp"
import Achievements3 from "../../Assets/Achievements3.webp"
import Achievements4 from "../../Assets/Achievements4.webp"
import Achievements5 from "../../Assets/Achievements5.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, [])


  return (
    <div className="achievements_section">
      
      <div className="achievements_header">
        <h1 data-aos={"zoom-in-up"} className="achievements_thought">OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM</h1>
        <div data-aos={"zoom-in-up"} data-aos-delay={'1000'} className="achievements_heading">
          <div className="achievements_lines"></div>
          <div>
            <h1 className="achievements_title">OUR ACHIEVEMENTS</h1>
          </div>
          <div className="achievements_lines"></div>
        </div>
      </div>


      <div className="achievements_timeline">

     

        <div data-aos-delay={'1000'} data-aos={"fade-left"} className="achievement_container left">
          <div className="achievement_content_container">
            <div className="achievements_contents">
              <h2>Shreyash Choppawar, Amit Prasad & Vedansh Shrivastav</h2>
              <div class="achievement_devicer"></div>
              <p>
                Second Runner-up at Innovate for Smart Pimpri Chinchwad, innovation Challenge organised by PCSCL, PCMC & PCCOE, Pune.
              </p>
            </div>
            <div className="achievement_image_conainer">
              <img className="achievement_image" src={Achievements1} alt="" />

            </div>
          </div>
        </div>
        <div data-aos-delay={'1000'} data-aos={"fade-right"} className="achievement_container right">
          <div className="achievement_content_container">
            <div className="achievement_image_conainer">
              <img className="achievement_image" src={Achievements2} alt="" />
            </div>
            <div className="achievements_contents">
              <h2> Sagar Warungase</h2>
              <div class="achievement_devicer"></div>
              <p>
                First Position at Techtatva Electronics Competition Organised by EnTC Dept, DYPCOE, Pune.
              </p>
            </div>
          </div>
        </div>
        <div data-aos-delay={'1000'} data-aos={"fade-left"} className="achievement_container left">
          <div className="achievement_content_container">
            <div className="achievements_contents">
              <h2>Samiksha Bhokare & Dibyanshu Sharma</h2>
              <div class="achievement_devicer"></div>
              <p>
                Second Position at Techtatva Electronics Competition Organised by EnTC Dept, DYPCOE, Pune.
              </p>
            </div>
            <div className="achievement_image_conainer">
              <img className="achievement_image" src={Achievements3} alt="" />
            </div>
          </div>
        </div>
        <div data-aos-delay={'1000'} data-aos={"fade-right"} className="achievement_container right">
          <div className="achievement_content_container">
            <div className="achievement_image_conainer">
              <img className="achievement_image" src={Achievements4} alt="" />
            </div>
            <div className="achievements_contents">
              <h2> Arvind Patel</h2>
              <div class="achievement_devicer"></div>
              <p>
                Second Runner-up at COEP Mindspark-19 Search & Destroy, organised by COEP, Pune.
              </p>
            </div>
          </div>
        </div>
        <div data-aos-delay={'1000'} data-aos={"fade-left"} className="achievement_container left">
          <div className="achievement_content_container">
            <div className="achievements_contents">
              <h2>Arvind Patel</h2>
              <div class="achievement_devicer"></div>
              <p>
                First Position at Bro Code & Code Capture Competition organised by PCCOE, Ravet.
              </p>
            </div>
            <div className="achievement_image_conainer">
              <img className="achievement_image" src={Achievements5} alt="" />
            </div>
          </div>
        </div>
        <div data-aos-delay={'1000'} data-aos={"fade-right"} className="achievement_container right">
          <div className="achievement_content_container">
            <div className="achievement_image_conainer">
              <img className="achievement_image" src={Achievements1} alt="" />
            </div>
            <div className="achievements_contents">

              <h2>Lorem ipsum dolor sit amet</h2>
              <div class="achievement_devicer"></div>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;