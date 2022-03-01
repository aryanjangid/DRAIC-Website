import React from 'react'
import { Link } from 'react-router-dom'
import './contact2.css'
export default function contact2() {
  return (
    <div>
      <Link to='/contact' className='contact-btn-all' >
        <div className='contact_btn_home' >
          <div className='contact-us-btn-text' >Contact Us</div>
        </div>
      </Link>
      {/* <button className='contact_btn_home'>Send</button> */}
    </div>
  )
}
