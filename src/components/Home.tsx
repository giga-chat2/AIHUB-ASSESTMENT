import React from 'react';

// Importing individual components for the home page
import Navbar from './Navbar/Navbar';
import MainSection from './MainSection/MainSection';
import Testimonials from './Testimonials/Testimonials';
import PricingModels from './PricingModels/PricingModels';
import Footer from './Footer/Footer';

/**
 * Home component: This is the main component for the home page.
 * It assembles various sections of the home page into a single component.
 * 
 * @returns {JSX.Element} The complete home page layout.
 */
const Home: React.FC = () => {
  return (
    <>
      {/* Renders the navigation bar at the top of the page */}
      <Navbar/>
      
      {/* Renders the main section which usually includes the hero content */}
      <MainSection/>
      
      {/* Renders the testimonials section to display user feedback or reviews */}
      <Testimonials/>
      
      {/* Renders the pricing models section to showcase different pricing plans */}
      <PricingModels/>
      
      {/* Renders the footer at the bottom of the page */}
      <Footer/>
    </>
  );
}

export default Home;
