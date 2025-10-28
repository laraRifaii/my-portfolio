import React from 'react';

const softSkills = [
  { name: 'Communication', icon: '💬', description: 'Clear and effective communication with teams and stakeholders' },
  { name: 'Time Management', icon: '⏰', description: 'Efficient project planning and deadline management' },
  { name: 'Critical Thinking', icon: '🧠', description: 'Analytical problem-solving and decision making' },
  { name: 'Creativity', icon: '🎨', description: 'Innovative solutions and user-centric design' },
  { name: 'Adaptability', icon: '🔄', description: 'Quick learning and flexibility in dynamic environments' },
  { name: 'Work Under Pressure', icon: '💪', description: 'Maintaining quality and composure in high-pressure situations' }
];

export default function SoftSkills() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Soft Skills</h2>
        <p className="text-center text-gray-600 mb-12">Personal strengths that drive professional success</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {softSkills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
