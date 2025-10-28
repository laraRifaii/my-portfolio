import React from 'react';

const pageBuilders = [
  { name: 'Elementor', level: 'Expert', projects: 10 },
  { name: 'Divi Builder', level: 'Expert', projects: 3 },
  { name: 'Be Builder', level: 'Advanced', projects: 2 }
];

const wpSkills = [
  { name: 'Responsive Design Fixes', icon: '📱' },
  { name: 'WooCommerce Setup', icon: '🛒' },
  { name: 'Weglot Translation', icon: '🌍' },
  { name: 'Custom CSS/JS', icon: '💻' },
  { name: 'Theme Customization', icon: '🎨' },
  { name: 'Plugin Integration', icon: '🔌' }
];

export default function WordPressExpertise() {
  return (
    <section className="py-20 pl-28 pr-28 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">WordPress Expertise</h2>
        <p className="text-center text-gray-600 mb-12">Specialized in building and fixing WordPress websites</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              Page Builders Mastery
            </h3>
            <div className="space-y-4">
              {pageBuilders.map((builder) => (
                <div key={builder.name} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-gray-900">{builder.name}</h4>
                    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{builder.level}</span>
                  </div>
                  <p className="text-sm text-gray-600">{builder.projects}+ projects completed</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              Core Capabilities
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {wpSkills.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">5+ Live WordPress Websites</h3>
          <p className="text-lg mb-6">Successfully fixed responsiveness, implemented translations, and enhanced functionality</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">axiom-experts.com</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">uoagri.com</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">dc7-holding.com</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">heethr.com</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">pulse.us.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
