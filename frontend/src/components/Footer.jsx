import React from 'react';
import { personalInfo } from '../data/mock';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">&lt;</span>
            <span className="text-purple-400 glow-text">{personalInfo.name}</span>
            <span className="text-white">/&gt;</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear} {personalInfo.name}. Crafted with</span>
            <Heart className="w-4 h-4 text-purple-400 fill-purple-400 animate-pulse" />
            <span>and React</span>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a href="#hero" className="text-gray-400 hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;