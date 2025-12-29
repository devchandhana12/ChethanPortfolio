import React from 'react';
import { skills } from '../data/mock';
import { Code2, Cpu, Sparkles } from 'lucide-react';

const About = () => {
  const iconMap = {
    'Frontend': Code2,
    'Backend': Cpu,
    'AI/ML': Sparkles
  };

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 glow-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating intelligent, scalable solutions that make a difference
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, idx) => {
            const Icon = iconMap[skillCategory.category];
            return (
              <div
                key={skillCategory.category}
                className="group relative p-8 bg-gradient-to-br from-purple-900/20 to-black/40 border border-purple-500/20 rounded-2xl hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 animate-slide-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 group-hover:from-purple-500/10 group-hover:to-purple-600/5 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-purple-400" />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-2xl font-bold text-white mb-6">{skillCategory.category}</h3>

                  {/* Skills with progress bars */}
                  <div className="space-y-4">
                    {skillCategory.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-purple-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-purple-950/50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-1000 ease-out glow-bar"
                            style={{ 
                              width: `${skill.level}%`,
                              animation: `expandWidth 1.5s ease-out ${idx * 0.2}s both`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;