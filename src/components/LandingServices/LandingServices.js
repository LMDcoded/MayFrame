import React from 'react'
import classes from './LandingServices.module.css'
import img1 from '../../Assets/first card.png'
import img2 from '../../Assets/Second card (1).png'
import img3 from '../../Assets/Frame 1000003560.png'
import img4 from '../../Assets/Frame 1000003561.png'
import img5 from '../../Assets/Frame 1000003562.png'

const LandingServices = () => {
  return (
    <div className={classes.container}>
      <h4>WHAT WE DO</h4>
      <h3>We provide perfect solution to your business and personal growth</h3>
      <div className={classes.serviceImage1}>
        <img src={img1} alt='consultancy'/>
        <img src={img2} alt='investment'/>
      </div>
      <div className={classes.serviceImage2}>
      <img src={img3} alt='development'/>
      <img src={img4} alt='agro'/>
      <img src={img5} alt='driving'/>
      </div>
        


        
    </div>
  )
}

export default LandingServices