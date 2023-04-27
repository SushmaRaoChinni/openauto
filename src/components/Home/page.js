import  { useState } from 'react'
import './page.css';
import map from '../../assets/Pickup_Illustration.png'
import Axios from 'axios'


const Pages = () => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');

  const login = (e) =>{
    e.preventDefault();

    Axios.post("http://localhost:3300/register",{userName:Name, userMail:Email}).then((response)=>{
      console.log(response);
  })
  setName('')
  setEmail('')
  }
  return (
    
    <div className='cl'>
  <div className='container'>
   <div>
    
    <h1 className='heading'>Vehicle Maintenance From The Comfort of Your Home</h1>
    <p className='para'>
      Open Auto Soothes the hassle OF maintaining your vehicle and helps you deal with unexpected repairs worry free
    </p>
    <form onClick={login}>
    <input className='name' onChange={(e)=>
    setName(e.target.value)}></input><br/>
    <br/>
    <input className='name'  onChange={(e)=>
    setEmail(e.target.value)}></input><br/>
    <br/>
    
    <button type="button" className='sub'>submit</button>
    </form>
    </div>
    
    
    <img src={map} className='map' alt="map"/>
    <div className='cl'>
    
    
    </div>
    
 
  </div>
 
  </div>
  )
}

export default Pages
