import React from 'react'
import './team.css'
import { NavLink } from 'react-router-dom'
import download from '../Team/download.jpg'
import download1 from '../Team/download1.jpg'
import download2 from '../Team/download2.jpg'

export default function Team() {
    return (
        <div className='mainbody_team'>
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
                    <div className="about-department-grid">

                        <NavLink className="about-department-link" aria-current="page" to="/progammingDepartment">
                            <article className="about-department-grid-box flow bg-black text-neutral-100 border-primary-400">

                                <div className='about-department-title-body'>
                                    <img className='about-department-icon' alt="progdep" src="https://img.icons8.com/ios-filled/50/ffffff/code.png" />
                                    <p className="about-department-heading">PROGRAMMING</p>
                                </div>

                                <div className="about-department-text">
                                    <p className='dep_para'>
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
                                    <p className='dep_para'>
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
                                    <p className='dep_para'>
                                        I received a job offer mid-course, and the subjects I learned were current, if not more so,
                                        in the company I joined. I honestly feel I got every penny’s worth.
                                    </p>
                                </div>
                            </article>
                        </NavLink>
                    </div>
                </div>
            <br /><br />
            </div>
            <br />
            <div className="about-seperator3">
                    <div className="about-title-line1"></div>
                    <div>
                        <h1 className="about-heading about-heading3">OUR MEMORIES</h1>
                    </div>
                    <div className="about-title-line2"></div>
            </div>
            <div className="container">
                <div className="team_pic_robocon">
                    <h3 className='roboheading'>ROBOCON PARTICIPATIONS</h3>
                    <br />
                    <img className='img1' src={download2} alt=""/>
                </div>
                <div className="team_pic_workshop">
                    <h3 className='workheading'>WORKSHOPS AND SEMINARS</h3>
                    <br />
                    <img className='img2' src={download1} alt=""/>
                </div>
                <div className="team_pic_robosuper">
                    <h3 className='robosuperheading'>ROBO SUPER LEAGUE</h3>
                    <br />
                    <img className='img3' src={download} alt=""/>
                </div>
            </div>
        </div>
    )
}
