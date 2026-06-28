import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutSkills from './sections/AboutSkills';
import Education from './sections/Education'; 
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ethiopian-bg-dark text-ethiopian-text-muted selection:bg-ethiopian-gold/30 selection:text-ethiopian-text-bright antialiased flex flex-col justify-between">
      {/* Navbar stays fixed across all route changes */}
      <Navbar />
      
      {/* The main workspace window container hooks here */}
      <main className="flex-grow">
        <Routes>
          {/* Base URL (/) renders the Hero Landing window */}
          <Route path="/" element={<Hero />} />
          
          {/* Sub-window routes */}
          <Route path="/skills" element={<AboutSkills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      {/* Footer stays fixed at the bottom baseline layer */}
      <Footer />
    </div>
  );
}