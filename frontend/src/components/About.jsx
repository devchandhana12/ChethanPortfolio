import React from 'react';
import { personalInfo } from '../data/mock';
import { Star, Zap, Award, Code, Briefcase, TrendingUp } from 'lucide-react';
import Rocket from './Rocket';

const About = () => {
  // Tech stack with simple text logos (can be replaced with actual SVG logos later)
  const techStack = [
    // Frontend - Primary Expertise
    { name: 'React', logo: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'React Native', logo: '📱', color: 'from-purple-400 to-pink-500' },
    { name: 'TypeScript', logo: 'TS', color: 'from-blue-400 to-blue-600' },
    { name: 'Tailwind CSS', logo: '🎨', color: 'from-cyan-300 to-blue-400' },
    
    // Backend & Full Stack
    { name: 'Python', logo: '🐍', color: 'from-yellow-400 to-yellow-600' },
    { name: 'FastAPI', logo: '⚡', color: 'from-green-400 to-emerald-500' },
    { name: 'Firebase', logo: '🔥', color: 'from-orange-400 to-red-500' },
    
    // AI/ML
    { name: 'NumPy', logo: '🔢', color: 'from-blue-500 to-indigo-600' },
    { name: 'Pandas', logo: '🐼', color: 'from-purple-500 to-purple-700' },
    { name: 'Scikit-Learn', logo: '🤖', color: 'from-orange-500 to-red-600' },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      {/* Floating rockets */}
      <Rocket delay={0} position="right" />
      <Rocket delay={5} position="left" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <Star className="w-8 h-8 text-purple-400 animate-spin-slow" />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 glow-text">Me</span>
            </h2>
            <Zap className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="group p-6 bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 text-center">
                <Award className="w-10 h-10 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-white mb-2">{personalInfo.yearsOfExperience}+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 text-center">
                <Briefcase className="w-10 h-10 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-white mb-2">{personalInfo.projectsCompleted}</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 text-center">
                <TrendingUp className="w-10 h-10 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-white mb-2">{personalInfo.aiProjectsCompleted}</div>
                <div className="text-gray-400">AI Projects Built</div>
              </div>
            </div>

            {/* Story Text */}
            <div className="p-8 bg-gradient-to-br from-purple-900/20 to-black/40 border border-purple-500/20 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {personalInfo.story}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                  <Code className="inline w-4 h-4 mr-2" />
                  React Expert
                </div>
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                  📱 React Native Specialist
                </div>
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                  🚀 Full Stack Developer
                </div>
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                  🤖 AI Enthusiast
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-bold text-center text-white mb-4">
            <span className="text-purple-400">Technologies</span> I Work With
          </h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            My toolkit for building amazing digital experiences
          </p>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, idx) => (
              <div
                key={tech.name}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Glowing effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                {/* Tech Card */}
                <div className="relative p-6 bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/30 rounded-xl hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 backdrop-blur-sm text-center">
                  {/* Logo/Emoji */}
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.logo}
                  </div>
                  
                  {/* Tech Name */}
                  <div className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
                    {tech.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Currently Doing */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-block p-8 bg-gradient-to-r from-purple-900/40 to-purple-800/40 border border-purple-500/40 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400"></div>
              <h4 className="text-2xl font-bold text-white">Currently</h4>
            </div>
            <p className="text-purple-200 text-lg max-w-2xl">
              Diving deeper into <span className="text-purple-400 font-semibold">Full Stack Development</span> and 
              <span className="text-purple-400 font-semibold"> AI Engineering</span>. 
              Building intelligent applications that combine beautiful UIs with smart backends. 
              <span className="block mt-2 text-purple-300">Always open to exciting new projects! 🚀</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
