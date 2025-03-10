// src/components/ContactSection.tsx
import React from 'react';


const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;