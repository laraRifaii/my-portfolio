import React from "react";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="py-60 px-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.469 14.825c.053-.16.053-.328 0-.488l-2.85-8.55a.75.75 0 00-.712-.512H6.093a.75.75 0 00-.712.512l-2.85 8.55c-.053.16-.053.328 0 .488l2.85 8.55a.75.75 0 00.712.512h11.814a.75.75 0 00.712-.512l2.85-8.55z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">WordPress</h3>
            <div className="flex flex-wrap gap-2">
              {skills.wordpress.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tools & Concepts
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
