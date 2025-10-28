import React from 'react';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Professional Experience</h2>
        <p className="text-center text-gray-600 mb-12">My career journey and achievements</p>
        
        <div className="max-w-5xl mx-auto">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 pb-12 border-l-2 border-indigo-300 last:pb-0">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white"></div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-indigo-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{exp.period}</span>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <svg className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
