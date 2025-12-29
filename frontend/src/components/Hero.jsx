import React from 'react';
import { personalInfo } from '../data/mock';
import Satellite from './Satellite';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Satellites */}
      <div className="absolute top-20 right-20">
        <Satellite delay={0} size="large" />
      </div>
      <div className="absolute bottom-40 left-20">
        <Satellite delay={5} size="medium" />
      </div>
      <div className="absolute top-40 left-1/4">
        <Satellite delay={10} size="small" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Floating badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8 animate-float"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300 text-sm">Available for new projects</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-white">Hi, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 glow-text animate-gradient">
            {personalInfo.name}
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl text-purple-300 mb-6 font-light animate-fade-in-delay-1">
          {personalInfo.title}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-delay-2">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6 justify-center items-center animate-fade-in-delay-3">
          <a href="#projects">
            <button className="group px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 flex items-center gap-2">
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View My Work
            </button>
          </a>
          <a href="#contact">
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
              Get In Touch
            </button>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;