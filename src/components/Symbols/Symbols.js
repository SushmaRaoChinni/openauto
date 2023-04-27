import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {CiMail} from 'react-icons/ci'
import './Symbols.css'



function Symbols() {
  return (
    <div className='container'>
        <div>
      <h2>Open Auto </h2>
      Open Auto@All rights resevered
      </div>
      <div className='box'>
    <div className='call'>
    <IoIosCall className='caller-icon'/>
    <h6 className='callers'>+769 586 4558</h6>
    </div>
    <div className='call'>
    <CiMail className='caller-icon'/>
    <h6 className='services'>service@openauto.ca</h6>
  
  
    
    
    </div>
   
    
    
    </div>
    </div>
  )
}

export default Symbols