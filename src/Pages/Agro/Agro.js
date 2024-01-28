import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/AgroHero/AgroHero'
import Benefits from '../../components/Benefits/Benefits'
import Services from '../../components/Services/Services'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'

const Agro = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Benefits/>
        <Services/>
        <Testimonials/>
        <Contact/>
    </div>
  )
}

export default Agro