import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { navLinks } from '../data/portfolioData';

const CV_LINK = "/cv.pdf";

const NAV_LABELS = {
  accueil: "Accueil",
  apropos: "À propos",
  experience: "Expérience",
  competences: "Compétences",
  formation: "Formation",
  projets: "Projets",
  contact: "Contact",
};

export default function Navbar({ darkMode, setDarkMode, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo - nom complet */}
          <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Fatoumata DIA
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors text-sm ${
                  activeSection === section
                    ? 'text-purple-500'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {NAV_LABELS[section] || section}
              </button>
            ))}

            {/* Bouton CV */}
            <a
              href={CV_LINK}
              download
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition-opacity text-white text-sm"
            >
              <Download className="w-4 h-4" />
              CV
            </a>

            {/* Bouton thème */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile ouvert */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-4 py-2 ${
                  activeSection === section ? 'text-purple-500' : ''
                }`}
              >
                {NAV_LABELS[section] || section}
              </button>
            ))}
            <a
              href={CV_LINK}
              download
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white"
            >
              <Download className="w-4 h-4" />
              Télécharger CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}