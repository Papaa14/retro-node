// src/components/Navbar.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-black text-white py-4 z-50"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Retro Ink</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-red-400">Home</Link></li>
          <li><Link to="/services" className="hover:text-gray-400 ">Services</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-400">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;