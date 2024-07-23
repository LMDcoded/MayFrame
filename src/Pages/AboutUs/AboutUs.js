import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/AboutUs/AboutHero/AboutHero'
import Mission from '../../components/AboutUs/AboutMission/AboutMission'
import Value from '../../components/Value/Value'
import Competence from '../../components/Competence/Competence'


const AboutUs = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Mission/>
      <Value/>
      <Competence/>
      <Footer/>
    </div>
  )
}

export default AboutUs