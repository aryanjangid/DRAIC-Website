import React from 'react'
import Avatar from './Avatar'
import SocialMedia from './Socialmedia'
import ProfDepList from './mechDep'
import './mechanical-department.css'

function mechdep() {
    return (
        <>
            <div className='department-page'>
                {/* department-hero-container */}
                <div className=' department-mechanical-hero-container'>
                    <div className='department-text-container'>
                        <h1 className='department-title'>
                            MECHANICAL DEPARTMENT
                        </h1>
                        <p className='department-description'>
                            A random paragraph generator is a tool provided by
                            various websites that provides you as many random
                            paragraphs as you want. Be it for any work purpose
                            of yours, effortlessly. A random paragraph generator
                            is a tool provided by various websites that provides
                            you as many random paragraphs as you want. Be it for
                            any work purpose of yours, effortlessly.
                        </p>
                    </div>
                    <div className='department-image-container'>
                        {/* department-image */}
                        <img
                            src='https://cdn.dribbble.com/users/525908/screenshots/3013825/coder.gif'
                            className=' department-mechanical-image'
                            alt='departimg'></img>
                    </div>
                </div>

                <div className='department-header-container'>
                    <h1 className='department-moto'>
                        OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM
                    </h1>
                    <div className='seperator'>
                        <div className='depline1'></div>
                        <div>
                            <h1 className='department-name'>MECHANICAL TEAM</h1>
                        </div>
                        <div className='depline2'></div>
                    </div>
                </div>
                <div className='department-members-container'>
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

export default mechdep
