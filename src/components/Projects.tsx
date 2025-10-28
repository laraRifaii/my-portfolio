import React from 'react';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-60 pl-28 pr-28 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-12">Recent work and contributions</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-cyan-600 font-semibold mb-3">{project.subtitle}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Role: {project.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {highlight}
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
