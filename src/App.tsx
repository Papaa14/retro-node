// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServiceSection';
import GallerySection from './components/Gallery';
import ContactSection from './components/ContactForm';
import Footer from './components/Footer';
import BookingPage from './components/BookingForm';
import  Login from './components/LoginForm';
import SignupForm from './components/SignupForm';



function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;