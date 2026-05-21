import React from 'react';
import { Users, Mail, Phone, Briefcase } from 'lucide-react';
import { references } from '../data/portfolioData';

export default function References({ darkMode }) {
  return (
    <section id="references" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Références
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {references.map((ref, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50 shadow-lg'} hover:transform hover:scale-105 transition-all duration-300`}
            >
              {/* Header avec icône */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{ref.name}</h3>
                  <p className="text-sm text-purple-500">{ref.title}</p>
                </div>
              </div>

              {/* Informations */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-400" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {ref.company}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-sm text-purple-500 hover:text-purple-400"
                  >
                    {ref.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a
                    href={`tel:${ref.phone}`}
                    className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {ref.phone}
                  </a>
                </div>
              </div>

              {/* Relation */}
              <div className={`mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="font-semibold">Relation:</span> {ref.relationship}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}