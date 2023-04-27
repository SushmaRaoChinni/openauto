import React from 'react'
import './page.css';
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs';
import map from '../../assets/Pickup_Illustration.png'


const pages =() => {
  return (
    
    <div className='cl'>
  <div className='container'>
   <div>
    
    <h1 className='heading'>Vehicle Maintenance From The Comfort of Your Home</h1>
    <p className='para'>
      Open Auto Soothes the hassle OF maintaining your vehicle and helps you deal with unexpected repairs worry free
    </p>
    <button className='name'>Enter  your name</button><br/>
    <br/>
    <button className='name'>Enter  your email</button><br/>
    <br/>
    <button className='sub'>submit</button>
    </div>
    <img src={map} className='map' alt="map"/>
    <div className='cl'>
    
    </div>
    
 
  </div>
 
  </div>
  )
}

export default pages
