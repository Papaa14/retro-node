// src/components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} // Adjusted duration for smoother effect
          className="flex flex-col md:flex-row items-center justify-center mb-12"
        >
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Express Your Inner Art</h1>
            <p className="text-lg mb-6">Discover unique tattoo designs crafted by our talented artists.</p>
            <button
              onClick={handleBookNow}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
            >
              Book Now
            </button>
          </div>
          <div className="mt-8 md:mt-0 md:ml-8">
            <img
              src="/src/assets/images/banner.jpg" // Ensure this path is correct
              alt="Tattoo Artist"
              className="rounded-lg shadow-lg max-w-sm w-full"
            />
          </div>
        </motion.div>

        {/* Membership Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }} // Slightly delayed for staggered effect
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="py-10 text-2xl md:text-3xl font-semibold mb-4">
            Join Our Community!
          </h2>
          <p className="text-lg mb-6">
            Become a member today and enjoy exclusive discounts on tattoos, priority booking, and more.
          </p>
          <button
            onClick={handleLogin}
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded transition duration-300"
          >
            Login to Join
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;