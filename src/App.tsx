import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import NewsEvents from './components/NewsEvents';
import Admissions from './components/Admissions';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white bg-mesh selection:bg-school-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Programs />
        <NewsEvents />
        <Admissions />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
