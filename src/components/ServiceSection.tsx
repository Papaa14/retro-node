// src/components/ServicesSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="min-h-screen py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl py-10 font-bold text-center mb-8">Our Services</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
            <p>Unique tattoos tailored to your preferences.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Color Tattoos</h3>
            <p>Vibrant and colorful designs for bold expressions.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Cover-Ups</h3>
            <p>Transform old tattoos into stunning masterpieces.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Piercing</h3>
            <p>Get a nice piercing and look nice allday everyday.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;