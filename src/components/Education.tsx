import React from 'react';
import { education } from '../data/experience';

export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Education</h2>
        <p className="text-center text-gray-600 mb-12">Academic background and certifications</p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div key={edu.id} className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">{edu.period}</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold mb-2">{edu.field}</p>
              <p className="text-indigo-600 font-medium">{edu.institution}</p>
              {edu.gpa && (
                <p className="text-sm text-gray-600 mt-2">GPA: {edu.gpa}</p>
              )}
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Training</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">JavaScript Course</p>
                  <p className="text-sm text-gray-600">Udemy (Oct 2023 – Feb 2024)</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Web Development Bootcamp</p>
                  <p className="text-sm text-gray-600">Life Sculpture (Apr 2023 – Aug 2023)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
