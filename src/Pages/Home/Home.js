import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import Props from '../../components/Value/Value'
import About from '../../components/LandingAbout/LandAbout'
import Services from '../../components/LandingServices/LandingServices'
import Competence from '../../components/Competence/Competence'



const Home = () => {
  return (
    <div>
       <Header/>
       <Hero/>
       <About/>
       <Services/>
       <Props/>
       <Competence/>
       <Footer/>
    </div>
  )
}

export default Home