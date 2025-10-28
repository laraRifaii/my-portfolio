import React from 'react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const downloadCV = () => {
    window.open('/api/download-cv', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400">{personalInfo.title}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={downloadCV} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Download CV
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Languages</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Arabic - Native</li>
              <li>English - Fluent</li>
              <li>French - Intermediate</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
