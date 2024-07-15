import React from 'react'
import Navbar from './Navbar/Navbar'
import MainSection from './MainSection/MainSection'
import Testimonials from './Testimonials/Testimonials'
import PricingModels from './PricingModels/PricingModels'
import Footer from './Footer/Footer'

const Home:React.FC = () => {
  return (
    <>
    <Navbar/>
    <MainSection/>
    <Testimonials/>
    <PricingModels/>
    <Footer/>
    </>
  )
}

export default Home