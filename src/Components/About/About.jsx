import React from 'react';
import { NavLink } from 'react-router-dom';
import InfoCard from './components/InfoCard';
import NeumericInfobox from './components/NeumericInfobox';
import './about.css'

const card1Text = 'D. Y. Patil Robotics & AI Club is a group of highly dedicated individuals, from all engineering disciplines, working passionately in the field of Robotics & AI to take the college (DYPCOE, Pune) to new heights in this field. The Club focuses on the development of students through working on various robotic projects and also participating in National as well as International level Competitions.'
const card1Icon = 'https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-group-social-media-sbts2018-solid-sbts2018.png'
const card1Title = 'WHO WE ARE'

const card2Text = 'Team DRAIC seeks to inspire the next generation of bright minds, to cultivate an appreciation for the present technology and develop a cognitive thinking towards the solutions to present scenario by engaging in competition and building innovative projects.'
const card2Icon = 'https://img.icons8.com/ios-filled/50/ffffff/mission-of-a-company.png'
const card2Title = 'MISSION'

const card3Text = 'To achieve an excellence in the field of robotics and AI, Thus contributing towards the development of the nation. To achieve an excellence in the field of robotics and AI, Thus contributing towards the development of the nation.'
const card3Icon = 'https://img.icons8.com/android/48/ffffff/rocket.png'
const card3Title = 'VISION'

const NAbout = () => {
    return (
        <div className='about-body'>
            <div className="aboutmain">
                <div className="about-title-body">
                    <h1 className="about-subheading">WHO WE ARE AND WHY WE ARE DOING THIS</h1>
                    <div className="about-seperator">
                        <div className="about-title-line1"></div>
                        <div>
                            <h1 className="about-heading">ABOUT US</h1>
                        </div>
                        <div className="about-title-line2"></div>
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-content-first-row">
                        <InfoCard contentText={card1Text} cardIcon={card1Icon} cardTitle={card1Title} key={card1Title} />
                        <InfoCard contentText={card2Text} cardIcon={card2Icon} cardTitle={card2Title} key={card2Title} />
                    </div>
                    <div className="about-content-second-row">
                        <InfoCard contentText={card3Text} cardIcon={card3Icon} cardTitle={card3Title} key={card3Title} />
                        <div className="neumeric-info-boxes">
                            <div className="neumeric-info-row-1">
                                <NeumericInfobox NeumericTitle={'Members'} />
                                <NeumericInfobox NeumericTitle={'Projects'} />
                            </div>
                            <div className="neumeric-info-row-2">
                                <NeumericInfobox NeumericTitle={'Alumini'} />
                                <NeumericInfobox NeumericTitle={'Achievements'} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-department">
                    <div className="about-title-body">
                        <h1 className="about-subheading about-subheading2">WHO WE ARE AND WHY WE ARE DOING THIS</h1>
                        <div className="about-seperator2">
                            <div className="about-title-line1"></div>
                            <div>
                                <h1 className="about-heading about-heading2">OUR DEPARTMENTS</h1>
                            </div>
                            <div className="about-title-line2"></div>
                        </div>

                    </div>
                    <div className="about-department-grid">

                        <NavLink className="about-department-link" aria-current="page" to="/progammingDepartment">
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
                        <NavLink className="about-department-link" aria-current="page" to="/MechenicalDepartment">
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
                        <NavLink className="about-department-link" aria-current="page" to="/ElectricalDepartment">
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

export default NAbout