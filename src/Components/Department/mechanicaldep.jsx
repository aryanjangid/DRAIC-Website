import React from 'react'
import Avatar from './Avatar'
import SocialMedia from './Socialmedia'
import members from './mechDep'
import './mechanical-department.css'

const ProfDepList = members.filter(member => member[3] === 'Mechanical')

function mechdep() {
    return (
        <>
            <div className='mech-department-page'>
                {/* mech-department-hero-container */}
                <div className=' mech-department-hero-container'>
                    <div className='mech-department-text-container'>
                        <h1 className='mech-department-title'>
                            MECHANICAL DEPARTMENT
                        </h1>
                        <p className='mech-department-description'>
                            A random paragraph generator is a tool provided by
                            various websites that provides you as many random
                            paragraphs as you want. Be it for any work purpose
                            of yours, effortlessly. A random paragraph generator
                            is a tool provided by various websites that provides
                            you as many random paragraphs as you want. Be it for
                            any work purpose of yours, effortlessly.
                        </p>
                    </div>
                    <div className='mech-department-image-container'>
                        {/* mech-department-image */}
                        <img
                            src='https://cdn.dribbble.com/users/2221597/screenshots/11933222/media/c7bff7d4fa3f4befecb1cd1ae87c08ae.gif'
                            className=' mech-department-image'
                            alt='departimg'></img>
                    </div>
                </div>

                <div className='mech-department-header-container'>
                    <h1 className='mech-department-moto'>
                        OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM
                    </h1>
                    <div className='seperator'>
                        <div className='depline1'></div>
                        <div>
                            <h1 className='mech-department-name'>
                                MECHANICAL TEAM
                            </h1>
                        </div>
                        <div className='depline2'></div>
                    </div>
                </div>
                <div className='mech-department-members-container'>
                    {ProfDepList.map((card) => {
                        return (
                            <div className='profile-card'>
                                <div className='text'>
                                    <Avatar img={card[4]} />
                                    <h3>{card[2]}</h3>
                                    <p>{card[5]}</p>
                                    <div className='links'>
                                        <SocialMedia
                                            linkedin={card[7]}
                                            instagram={card[8]}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default mechdep
