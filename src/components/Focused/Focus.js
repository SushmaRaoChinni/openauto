import React from 'react'
import './Focus.css'
import phone from '../../assets/picku service.png'

const Focus=() =>{
  return (
   
    
      <div className='focus'>
      <img src={phone} className='phone' alt="phone"/>
      <div>
        <h1 className='head'>
            Focused on Time Saving
        </h1> 
        <p className='paragraph'>
            Lorem ipsum is simply text of the printing and typesetting. Lorem ipsum has been the industrys dummy text ever since the 1500s , when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has surived not only five ceturies , but  also  the leap into electronic typesetting remaining essentially unchanged .it was
        </p>
        <button className='button'>Download the mobile App</button>
        </div>
    </div>
   
    
  
  )
}

export default Focus