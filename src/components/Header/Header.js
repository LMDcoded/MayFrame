import React from 'react'
import './Header.css'
import logo from '../../Assets/agro/Agro LOGO.png'

const header = () => {
  return (
    <div className='container'>
      <header>      
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <nav>
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </nav>
      </header>

    </div>
  )
}

export default header