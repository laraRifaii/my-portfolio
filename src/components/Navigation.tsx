import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    window.open('/api/download-cv', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-28 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-2xl font-bold transition-colors ${
              scrolled ? 'text-indigo-600' : 'text-white'
            }`}
          >
            {personalInfo.name}
          </button>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-cyan-300'}`}>
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-cyan-300'}`}>
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-cyan-300'}`}>
              Contact
            </button>
           
          </div>
        </div>
      </div>
    </nav>
  );
}
