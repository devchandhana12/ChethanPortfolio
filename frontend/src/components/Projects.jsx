import React, { useState } from 'react';
import { projects } from '../data/mock';
import { ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI', 'Web', 'Mobile'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 glow-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            A showcase of my work across AI, web, and mobile development
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  filter === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-purple-900/20 text-purple-300 border border-purple-500/30 hover:border-purple-400/50'
                }`}
              >
                {category === filter && <Filter className="w-4 h-4" />}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-purple-900/20 to-black/40 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay with link */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-3 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-500 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-purple-400 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;