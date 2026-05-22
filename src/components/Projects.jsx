import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useGitHubProjects } from '../hooks/useGitHub';

function ProjectThumbnail({ project }) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = `/projects/${project.name}.png`;

  const content = !imgError ? (
    <img
      src={imageSrc}
      alt={project.name}
      onError={() => setImgError(true)}
      className="w-full h-full object-cover"
    />
  ) : (
    <span className="text-7xl">📁</span>
  );

  if (project.homepage && !imgError) {
    return (
      <a
        href={project.homepage}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-48 overflow-hidden relative group"
      >
        <img
          src={imageSrc}
          alt={project.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </a>
    );
  }

  return (
    <div className={`h-48 flex items-center justify-center ${imgError ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'overflow-hidden'}`}>
      {content}
    </div>
  );
}

export default function Projects({ darkMode }) {
  const { projects, loading, error } = useGitHubProjects();

  return (
    <section id="projets" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projets
          </span>
        </h2>

        {/* Chargement */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Erreur */}
        {error && (
          <p className="text-center text-red-400 py-10">⚠️ {error}</p>
        )}

        {/* Grille */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50 shadow-lg'} hover:transform hover:scale-105 transition-all duration-300`}
              >
                <ProjectThumbnail project={project} />

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {project.name.replace(/-/g, ' ')}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description || 'Pas de description disponible.'}
                  </p>

                  {/* Topics (technos) */}
                  {project.topics?.filter(t => t !== 'portfolio').length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics.filter(t => t !== 'portfolio').map(topic => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Liens */}
                  <div className="flex gap-4">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    {/* Démo disponible plus tard via portfolio.json */}
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}