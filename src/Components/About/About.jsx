import React from 'react';
import { NavLink } from 'react-router-dom';
import "./about.css"
function About() {
  return (
    <div className='about-body'>
      <div className="aboutmain">
        <div className="about-title-body">
          <h1 className="about-subheading">WHO WE ARE AND WHY WE ARE DOING THIS</h1>
          <div className="seperator">
            <div className="about-title-line1"></div>
            <div>
              <h1 className="about-heading">ABOUT US</h1>
            </div>
            <div className="about-title-line2"></div>
          </div>

        </div>
        
        <div className="about-content">
          <article className="about-content-grid flow bg-secondary-400 text-neutral-100 content-grid-width">
            <div className="about-content-grid-box">
              <div className='about-content-iconbox'>
                <img className='about-content-icon' src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-group-social-media-sbts2018-solid-sbts2018.png" alt="who we are" />
              </div>
              <div>
                <h2 className="about-content-title">WHO WE ARE</h2>
              </div>
            </div>

            <p className="about-content-text">
              D. Y. Patil Robotics & AI Club is a group of highly dedicated individuals, from all engineering disciplines, working passionately in the field of Robotics & AI to take the college (DYPCOE, Pune) to new heights in this field. The Club focuses on the development of students through working on various robotic projects and also participating in National as well as International level Competitions.
            </p>
          </article>
          <article className="about-content-grid flow bg-secondary-400 text-neutral-100">
            <div className="about-content-grid-box">
              <div className='about-content-iconbox'>
                <img className='about-content-icon' src="https://img.icons8.com/ios-filled/50/ffffff/mission-of-a-company.png" alt="mission" />
              </div>
              <div>
                <h2 className="about-content-title">MISSION</h2>
              </div>
            </div>
            <p className="about-content-text">
              Team DRAIC seeks to inspire the next generation of bright minds, to cultivate an appreciation for the present technology and develop a cognitive thinking towards the solutions to present scenario by engaging in competition and building innovative projects.
            </p>
          </article>
        </div>
        <div className="about-content-grid-row2">
          <article className="about-content-grid about-grid-span2 flow bg-secondary-400 text-neutral-100 content-grid-width">
            <div className="about-content-grid-box">
              <div className='about-content-iconbox'>
                <img className='about-content-icon' src="https://img.icons8.com/android/48/ffffff/rocket.png" alt="vission" />
              </div>
              <div>
                <h2 className="about-content-title">VISSION</h2>

              </div>
            </div>

            <p className="about-content-text">
              To achieve an excellence in the field of robotics and AI, Thus contributing towards the development of the nation.
            </p>
          </article>
          <article className="about-content-grid  flow bg-secondary-500 text-neutral-100">
            <div className="about-content-grid-box">
              <div>
                <h2 className="about-content-count-main"><strong>50+</strong></h2>
                <p className="about-content-count-sub">Members</p>
              </div>
            </div>

          </article>
          <article className="about-content-grid flow bg-secondary-500 text-neutral-100">
            <div className="about-content-grid-box">

              <div>
                <h2 className="about-content-count-main"><strong>50+</strong></h2>
                <p className="about-content-count-sub">Alumni</p>
                
              </div>
            </div>


          </article>

          <article className="about-content-grid  flow bg-secondary-500 text-neutral-100">
            <div className="about-content-grid-box">

              <div>
                <h2 className="about-content-count-main"><strong>50+</strong></h2>
                <p className="about-content-count-sub">Projects</p>
              
              </div>
            </div>


          </article>
          <article className="about-content-grid flow bg-secondary-500 text-neutral-100 about-content-width">
            <div className="about-content-grid-box">

              <div>
                <h2 className="about-content-count-main"><strong>50+</strong></h2>
                <p className="about-content-count-sub achieve">Achievements</p>
              </div>
            </div>

          </article>
        </div>

     
        <div className="about-department">
        <div className="about-title-body">
          <h1 className="about-subheading">WHO WE ARE AND WHY WE ARE DOING THIS</h1>
          <div className="seperator">
            <div className="about-title-line1"></div>
            <div>
              <h1 className="about-heading">OUR DEPARTMENTS</h1>
            </div>
            <div className="about-title-line2"></div>
          </div>

        </div>
          <div className="about-department-grid">

            <NavLink activeClassName="active" className="about-department-link" aria-current="page" to="/progammingDepartment">
              <article className="about-department-grid-box flow bg-black text-neutral-100 border-primary-400">

                <div className='about-department-title-body'>
                  <img className='about-department-icon' alt="progdep" src="https://img.icons8.com/ios-filled/50/ffffff/code.png" />
                  <p className="about-department-heading">PROGRAMMING</p>
                </div>

                <div className="about-department-text">
                  <p>
                    I received a job offer mid-course, and the subjects I learned were current, if not more so,
                    in the company I joined. I honestly feel I got every penny,s worth.
                  </p>
                </div>

              </article>
            </NavLink>
            <NavLink activeClassName="active" className="about-department-link" aria-current="page" to="/MechenicalDepartment">
              <article className="about-department-grid-box flow bg-black text-neutral-100 border-primary-400">

                <div className='about-department-title-body'>
                  <img className='about-department-icon' alt="mechdep" src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/ffffff/external-wrench-labour-day-vitaliy-gorbachev-fill-vitaly-gorbachev.png" />
                  <p className="about-department-heading">MECHANICAL</p>
                </div>

                <div className="about-department-text">
                  <p>
                    I received a job offer mid-course, and the subjects I learned were current, if not more so,
                    in the company I joined. I honestly feel I got every penny's worth.
                  </p>
                </div>

              </article>
            </NavLink>
            <NavLink activeClassName="active" className="about-department-link" aria-current="page" to="/ElectricalDepartment">
              <article className="about-department-grid-box flow bg-black text-neutral-100 border-primary-400">

                <div className='about-department-title-body'>
                  <img className="about-department-icon" src="https://img.icons8.com/ios-filled/50/ffffff/electronics.png" alt="" />
                  <p className="about-department-heading">ELECTRICAL</p>
                </div>
                <div className="about-department-text">
                  <p>
                    I received a job offer mid-course, and the subjects I learned were current, if not more so,
                    in the company I joined. I honestly feel I got every penny’s worth.
                  </p>
                </div>
              </article>
            </NavLink>
          </div>

        </div>

      </div>
    </div>
  )
}
export default About;



