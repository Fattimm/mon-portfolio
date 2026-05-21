import React from 'react';
import { Code, Database, Smartphone, Server, Wrench, HardDrive } from 'lucide-react';
import { skills } from '../data/portfolioData';

const categoryConfig = {
  frontend:     { icon: Code,       color: 'text-purple-500', label: 'Frontend' },
  backend:      { icon: Server,     color: 'text-pink-500',   label: 'Backend' },
  mobile:       { icon: Smartphone, color: 'text-blue-500',   label: 'Mobile' },
  database:     { icon: HardDrive,  color: 'text-green-500',  label: 'Bases de données' },
  outils:       { icon: Wrench,     color: 'text-orange-500', label: 'Outils' },
  methodologies:{ icon: Database,   color: 'text-cyan-500',   label: 'Architecture & Méthodes' },
};

// Catégories à afficher en badges (pas softSkills)
const DISPLAY_CATEGORIES = ['frontend', 'backend', 'mobile', 'database', 'outils', 'methodologies'];

export default function Skills({ darkMode }) {
  return (
    <section id="competences" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Compétences Techniques
          </span>
        </h2>

        {/* Compétences techniques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {DISPLAY_CATEGORIES.map((category) => {
            const items = skills[category];
            if (!items?.length) return null;
            const { icon: IconComponent, color, label } = categoryConfig[category];

            return (
              <div
                key={category}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className={`w-6 h-6 ${color}`} />
                  <h3 className="text-xl font-semibold">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        {skills.softSkills?.length > 0 && (
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
            <h3 className="text-xl font-semibold mb-4 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Soft Skills
              </span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.softSkills.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-purple-50 text-purple-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}