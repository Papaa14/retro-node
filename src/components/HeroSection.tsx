// src/components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const handleboknow = () => {
    navigate('/booking');
  };
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center"
      >
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Express Your Inner Art</h1>
          <p className="text-lg mb-6">Discover unique tattoo designs crafted by our talented artists.</p>
          <button onClick={handleboknow} className="bg-blue-600 hover:bg-red-700 text-white py-2 px-4 rounded">Book Now</button>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="/src/assets/images/banner.jpg"
            alt="Tattoo Artist"
            className="rounded-lg shadow-lg max-w-sm"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;