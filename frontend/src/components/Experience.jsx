import React from 'react';
import { experience } from '../data/mock';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Work </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 glow-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey through the tech world
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-600 hidden md:block"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div
                key={exp.id}
                className="relative flex gap-8 items-start animate-slide-right"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 flex-shrink-0 relative z-10">
                  <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-pulse"></div>
                  <div className="absolute w-8 h-8 bg-purple-500/20 rounded-full animate-ping"></div>
                </div>

                {/* Content card */}
                <div className="flex-1 group">
                  <div className="p-8 bg-gradient-to-br from-purple-900/20 to-black/40 border border-purple-500/20 rounded-2xl hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
                    {/* Year badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-300 font-semibold text-sm">{exp.year}</span>
                    </div>

                    {/* Title and Company */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Briefcase className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-purple-300 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 group-hover:from-purple-500/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;