import React from 'react';
import { Rocket as RocketIcon } from 'lucide-react';

const Rocket = ({ delay = 0, position = 'right' }) => {
  const positionClasses = {
    right: 'right-10',
    left: 'left-10',
    center: 'left-1/2 -translate-x-1/2'
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} pointer-events-none z-5`}
      style={{
        animation: `rocketFloat 15s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <div className="relative">
        {/* Rocket exhaust */}
        <div 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-8 opacity-70"
          style={{
            background: 'linear-gradient(to bottom, #f59e0b, #ef4444, transparent)',
            animation: 'flicker 0.3s ease-in-out infinite',
            filter: 'blur(2px)'
          }}
        ></div>
        
        {/* Rocket body */}
        <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center shadow-2xl shadow-purple-500/50 hover:scale-110 transition-transform duration-300">
          <RocketIcon className="w-7 h-7 text-white transform -rotate-45" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-purple-500/30 rounded-lg animate-pulse"></div>
          
          {/* Particles */}
          <div className="absolute -z-10">
            <div 
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              style={{
                animation: 'particle1 1s ease-out infinite',
                left: '-5px',
                bottom: '-10px'
              }}
            ></div>
            <div 
              className="absolute w-1 h-1 bg-red-400 rounded-full"
              style={{
                animation: 'particle2 1.2s ease-out infinite',
                right: '-5px',
                bottom: '-10px'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocket;