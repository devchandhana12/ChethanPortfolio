import React from 'react';
import { personalInfo, skills } from '../data/mock';
import { Code2, Cpu, Sparkles, Star, Zap } from 'lucide-react';
import Rocket from './Rocket';

const About = () => {
  const iconMap = {
    'Frontend': Code2,
    'Backend': Cpu,
    'AI/ML': Sparkles
  };

  return (
    <section id="about" className="relative py-32 px-6">
      {/* Floating rockets */}
      <Rocket delay={0} position="right" />
      <Rocket delay={5} position="left" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <Star className="w-8 h-8 text-purple-400 animate-spin-slow" />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 glow-text">Me</span>
            </h2>
            <Zap className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skillCategory, idx) => {
            const Icon = iconMap[skillCategory.category];
            return (
              <div
                key={skillCategory.category}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-border"></div>
                
                {/* Card content */}
                <div className="relative p-8 bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/30 rounded-2xl hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 backdrop-blur-sm">
                  {/* Floating icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/50 animate-float-slow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Orbiting particles */}
                    <div className="absolute inset-0 animate-spin-slow">
                      <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 shadow-lg shadow-purple-400"></div>
                    </div>
                  </div>

                  {/* Category Title */}
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">
                    {skillCategory.category}
                  </h3>

                  {/* Skills with animated progress bars */}
                  <div className="space-y-5">
                    {skillCategory.items.map((skill, skillIdx) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium group-hover/skill:text-purple-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-purple-400 text-sm font-bold">{skill.level}%</span>
                        </div>
                        
                        {/* Animated progress bar */}
                        <div className="relative h-2 bg-purple-950/50 rounded-full overflow-hidden">
                          {/* Background glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20 animate-pulse"></div>
                          
                          {/* Progress fill */}
                          <div
                            className="relative h-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animation: `expandWidth 1.5s ease-out ${idx * 0.2 + skillIdx * 0.1}s both`,
                              boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
                            }}
                          >
                            {/* Moving shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                          </div>
                          
                          {/* Particle at the end */}
                          <div 
                            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-300 rounded-full shadow-lg shadow-purple-400 animate-pulse"
                            style={{ 
                              left: `${skill.level}%`,
                              animation: `expandWidth 1.5s ease-out ${idx * 0.2 + skillIdx * 0.1}s both, pulse 2s ease-in-out infinite`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 group-hover:from-purple-500/10 group-hover:to-purple-600/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-600/10 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Marquee */}
        <div className="relative overflow-hidden py-12 border-t border-b border-purple-500/20">
          <h3 className="text-center text-2xl font-bold text-white mb-8">
            <span className="text-purple-400">Tech Stack</span> & Tools
          </h3>
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {['React', 'TypeScript', 'Tailwind CSS', 'React Native', 'Python', 'FastAPI', 'Firebase', 'NumPy', 'Pandas', 'Scikit-Learn', 'TensorFlow', 'MongoDB'].map((tech, idx) => (
              <div key={idx} className="inline-flex items-center gap-3 px-6 py-3 bg-purple-900/30 border border-purple-500/30 rounded-full hover:bg-purple-500/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {['React', 'TypeScript', 'Tailwind CSS', 'React Native', 'Python', 'FastAPI', 'Firebase', 'NumPy', 'Pandas', 'Scikit-Learn', 'TensorFlow', 'MongoDB'].map((tech, idx) => (
              <div key={`dup-${idx}`} className="inline-flex items-center gap-3 px-6 py-3 bg-purple-900/30 border border-purple-500/30 rounded-full hover:bg-purple-500/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;