import React from 'react';
import { personalInfo } from '../data/mock';
import { 
  Code2, Cpu, Sparkles, Star, Zap, Rocket as RocketIcon,
  Database, Palette, Smartphone, Brain, Cloud, Code, Terminal,
  Layout, Globe, Box, GitBranch, Package, Activity
} from 'lucide-react';
import Rocket from './Rocket';

const About = () => {
  const techStack = [
    // Frontend
    { name: 'React', icon: Code2, category: 'Frontend', color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', icon: Code, category: 'Frontend', color: 'from-blue-400 to-blue-600' },
    { name: 'Tailwind CSS', icon: Palette, category: 'Frontend', color: 'from-cyan-300 to-blue-400' },
    { name: 'React Native', icon: Smartphone, category: 'Frontend', color: 'from-purple-400 to-pink-500' },
    
    // Backend
    { name: 'Python', icon: Terminal, category: 'Backend', color: 'from-yellow-400 to-yellow-600' },
    { name: 'FastAPI', icon: Zap, category: 'Backend', color: 'from-green-400 to-emerald-500' },
    { name: 'Firebase', icon: Cloud, category: 'Backend', color: 'from-orange-400 to-red-500' },
    { name: 'MongoDB', icon: Database, category: 'Backend', color: 'from-green-500 to-emerald-600' },
    
    // AI/ML
    { name: 'NumPy', icon: Brain, category: 'AI/ML', color: 'from-blue-500 to-indigo-600' },
    { name: 'Pandas', icon: Activity, category: 'AI/ML', color: 'from-purple-500 to-purple-700' },
    { name: 'Scikit-Learn', icon: Box, category: 'AI/ML', color: 'from-orange-500 to-red-600' },
    { name: 'TensorFlow', icon: Cpu, category: 'AI/ML', color: 'from-orange-400 to-orange-600' },
    
    // Tools
    { name: 'Git', icon: GitBranch, category: 'Tools', color: 'from-red-400 to-red-600' },
    { name: 'Docker', icon: Package, category: 'Tools', color: 'from-blue-500 to-blue-700' },
    { name: 'REST APIs', icon: Globe, category: 'Tools', color: 'from-purple-400 to-purple-600' },
    { name: 'UI/UX', icon: Layout, category: 'Tools', color: 'from-pink-400 to-rose-500' }
  ];

  const categories = ['Frontend', 'Backend', 'AI/ML', 'Tools'];
  const categoryIcons = {
    'Frontend': Code2,
    'Backend': Cpu,
    'AI/ML': Sparkles,
    'Tools': RocketIcon
  };

  return (
    <section id="about" className="relative py-32 px-6">
      {/* Floating rockets */}
      <Rocket delay={0} position="right" />
      <Rocket delay={5} position="left" />

      <div className="max-w-7xl mx-auto">
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

        {/* Tech Stack Grid with Icons */}
        <div className="mb-20">
          {categories.map((category, catIdx) => {
            const CategoryIcon = categoryIcons[category];
            const categoryTechs = techStack.filter(tech => tech.category === category);
            
            return (
              <div 
                key={category} 
                className="mb-16 animate-fade-in"
                style={{ animationDelay: `${catIdx * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                </div>

                {/* Tech Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {categoryTechs.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="group relative animate-slide-up"
                        style={{ animationDelay: `${catIdx * 0.2 + idx * 0.1}s` }}
                      >
                        {/* Glowing border on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                        
                        {/* Tech Card */}
                        <div className="relative p-6 bg-gradient-to-br from-purple-900/20 to-black/40 border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3 backdrop-blur-sm group-hover:bg-purple-900/30">
                          {/* Icon with gradient */}
                          <div className="relative mb-4">
                            <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            
                            {/* Orbiting dot */}
                            <div className="absolute inset-0 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 shadow-lg shadow-purple-400"></div>
                            </div>
                          </div>

                          {/* Tech Name */}
                          <h4 className="text-center text-white font-semibold text-lg group-hover:text-purple-300 transition-colors">
                            {tech.name}
                          </h4>

                          {/* Hover particles */}
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                          </div>

                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 group-hover:from-purple-500/10 group-hover:to-purple-600/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Specializations - What I Do Best */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            <span className="text-purple-400">Specializations</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                <Layout className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Full Stack Development</h4>
              <p className="text-gray-400">Building end-to-end web applications with modern frameworks and best practices</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-purple-500/50">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">AI & Machine Learning</h4>
              <p className="text-gray-400">Implementing intelligent solutions using cutting-edge ML algorithms and frameworks</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-green-500/50">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Mobile Development</h4>
              <p className="text-gray-400">Creating cross-platform mobile experiences with React Native</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;