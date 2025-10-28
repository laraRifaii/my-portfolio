import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Skills from './Skills';
import SoftSkills from './SoftSkills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WordpressExpertise from './WordpressExpertise';

export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WordpressExpertise />
      <Skills />
      <SoftSkills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
