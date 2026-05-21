import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education({ darkMode }) {
  return (
    <section id="formation" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Formation Académique
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative pl-8 pb-6 border-l-2 ${
                darkMode ? 'border-purple-500' : 'border-purple-400'
              } ${index === education.length - 1 ? 'pb-0' : ''}`}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500" />

              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                <p className="text-purple-500 font-semibold mb-3">{edu.school}</p>

                <div className={`flex flex-wrap gap-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {edu.description ? (
                  <p className={`mt-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {edu.description}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}