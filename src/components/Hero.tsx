import React from 'react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pl-28 pr-28 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68ff47818ae03d0959ebac87_1761560508949_59bb662a.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/85 to-cyan-900/90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-5 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50">
            <img src={personalInfo.profileImage} alt={personalInfo.name} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-cyan-300 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button onClick={scrollToProjects} className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                View Projects
              </button>
              <button onClick={scrollToContact} className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 text-white font-semibold rounded-lg transition-all">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
