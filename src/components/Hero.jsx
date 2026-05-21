import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useGitHubProfile } from '../hooks/useGitHub';

export default function Hero({ darkMode }) {
  const { profile, loading } = useGitHubProfile();

  return (
    <section id="accueil" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">

          {/* Avatar */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
            {profile?.avatar
              ? <img src={profile.avatar} alt={profile?.name} className="w-full h-full object-cover" />
              : <span className="text-6xl">👩🏾‍💻</span>
            }
          </div>

          {/* Nom */}
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {profile?.name}
            </span>
          </h1>

          {/* Titre */}
          <p className="text-xl sm:text-2xl text-gray-400">
            {profile?.title}
          </p>

          {/* Bio */}
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {profile?.bio}
          </p>

          {/* Liens sociaux */}
          <div className="flex justify-center gap-4 pt-4">
            <a
              href={profile?.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={profile?.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={profile?.socialLinks.email}
              className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}