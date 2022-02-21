import React from 'react'
import Avatar from './Avatar'
import SocialMedia from './Socialmedia'
import ProfDepList from './eleDep'
import './electrical-department.css'

function Elecdep() {
    return (
        <>
            <div className='elec-department-page'>
                <div className='elec-department-hero-container'>
                    <div className='elec-department-text-container'>
                        <h1 className='elec-department-title'>
                            ELECTRICAL DEPARTMENT
                        </h1>
                        <p className='elec-department-description'>
                            A random paragraph generator is a tool provided by
                            various websites that provides you as many random
                            paragraphs as you want. Be it for any work purpose
                            of yours, effortlessly. A random paragraph generator
                            is a tool provided by various websites that provides
                            you as many random paragraphs as you want. Be it for
                            any work purpose of yours, effortlessly.
                        </p>
                    </div>
                    <div className='elec-department-image-container'>
                        <img
                            src='https://cdn.dribbble.com/users/542979/screenshots/3000076/sarah-working-on-computer.gif'
                            className='elec-department-image'
                            alt='departimg'></img>
                    </div>
                </div>

                <div className='elec-department-header-container'>
                    <h1 className='elec-department-moto'>
                        OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM
                    </h1>
                    <div className='seperator'>
                        <div className='depline1'></div>
                        <div>
                            <h1 className='elec-department-name'>
                                ELECTRICAL TEAM
                            </h1>
                        </div>
                        <div className='depline2'></div>
                    </div>
                </div>
                <div className='elec-department-members-container'>
                    {ProfDepList.map((card) => {
                        return (
                            <div className='profile-card'>
                                <div className='text'>
                                    <Avatar img={card.imgURL} />
                                    <h3>{card.name}</h3>
                                    <p>{card.branch}</p>
                                    <div className='links'>
                                        <SocialMedia
                                            linkedin={card.linkedinURL}
                                            instagram={card.instagramURl}
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

export default Elecdep
