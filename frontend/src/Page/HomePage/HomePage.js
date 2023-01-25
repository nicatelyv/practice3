import React from 'react'
import ServicesSection from '../../Components/HomePageComponents/ServicesSection/ServicesSection'
import WelcomeSection from '../../Components/HomePageComponents/WelcomeSection/WelcomeSection'
import Footer from '../../Layout/Footer/Footer'
import Navbar from '../../Layout/Navbar/Navbar'

function HomePage() {
  return (
    <>
        <Navbar/>
        <WelcomeSection/>
        <ServicesSection/>
        <Footer/>
    </>
  )
}

export default HomePage