import React from 'react'
import { NavLink } from 'react-router-dom';
import './team.css'
export default function Team() {
    return (
        <div>
            <div className='team-firstbox'>
                <div className="about-department">
                    <div className="about-title-body">
                        <h1 className="team-subheading">WHO WE ARE AND WHY WE ARE DOING THIS</h1>
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

                                    <div className="project-link-container">
                                        <NavLink activeClassName="active" className="dep-link" aria-current="page" to="/progammingDepartment"><button className="dep-button">View Department<span className="arrow">&rarr;</span></button></NavLink>
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
                                    <div className="project-link-container">
                                        <NavLink activeClassName="active" className="dep-link" aria-current="page" to="/MechenicalDepartment"><button className="dep-button">View Department<span className="arrow">&rarr;</span></button></NavLink>
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
                                    <div className="project-link-container">
                                        <NavLink activeClassName="active" className="dep-link" aria-current="page" to="/ElectricalDepartment"><button className="dep-button">View Department<span className="arrow">&rarr;</span></button></NavLink>
                                    </div>
                                </article>
                            </NavLink>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}
