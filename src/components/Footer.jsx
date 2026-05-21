import React from 'react';
import { useGitHubProfile } from '../hooks/useGitHub';

export default function Footer({ darkMode }) {
  const { profile } = useGitHubProfile(); // ← ajoute cette ligne
  return (
    <footer className={`py-8 px-4 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          {profile?.copyright}
        </p>
      </div>
    </footer>
  );
}