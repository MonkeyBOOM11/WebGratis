import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <MouseFollower />
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
