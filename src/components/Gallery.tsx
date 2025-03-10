// src/components/GallerySection.tsx
import React from 'react';
import { motion } from 'framer-motion';


const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className=" min-h-screen py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl py-8 font-bold text-center mb-8">Our Work</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <img src="/src/assets/images/1.jpg" alt="Tattoo" className="rounded-lg shadow-lg" />
          <img src="/src/assets/images/2.jpg" alt="Tattoo" className="rounded-lg shadow-lg" />
          <img src="/src/assets/images/3.jpg" alt="Tattoo" className="rounded-lg shadow-lg" />
          {/* Add more images as needed */}
        </motion.div>
        <div className='mt-10 flex justify-center'>
        <button className="bg-blue-600 hover:bg-red-700 text-white py-2 px-4 rounded">View More</button>
        </div>
        
      </div>
    </section>
  );
};

export default GallerySection;