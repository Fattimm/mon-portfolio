import React from 'react';
import { useGitHubProfile } from '../hooks/useGitHub';

export default function About({ darkMode }) {
  const { profile, loading } = useGitHubProfile();

  return (
    <section id="apropos" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            À Propos
          </span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-lg">
          {loading ? (
            <p className="text-center text-gray-400">Chargement...</p>
          ) : (
            profile?.aboutMe.map((paragraph, index) => (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className={darkMode ? 'text-gray-300' : 'text-gray-600'}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}