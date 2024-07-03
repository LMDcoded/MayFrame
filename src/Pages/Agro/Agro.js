import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/AgroHero/AgroHero'
import Benefits from '../../components/Benefits/Benefits'
import Services from '../../components/Services/Services'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'

const Agro = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Benefits/>
        <Services/>
        <About/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Agro