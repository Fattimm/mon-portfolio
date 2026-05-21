import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Expériences Professionnelles
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 pb-8 border-l-2 ${
                darkMode ? 'border-purple-500' : 'border-purple-400'
              } ${index === experiences.length - 1 ? 'pb-0' : ''}`}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500" />

              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50 shadow-lg'}`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-purple-500">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className={`flex flex-wrap gap-4 mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className={`space-y-2 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}