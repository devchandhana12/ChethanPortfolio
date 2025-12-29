import React from 'react';

const Satellite = ({ delay = 0, size = 'medium' }) => {
  const sizes = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  return (
    <div 
      className="absolute pointer-events-none"
      style={{
        animation: `float 20s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <div 
        className={`${sizes[size]} relative`}
        style={{
          animation: `rotate 15s linear infinite`,
          animationDelay: `${delay}s`
        }}
      >
        {/* Orbital ring */}
        <div className="absolute inset-0 rounded-full border-2 border-purple-500/30"></div>
        <div 
          className="absolute inset-2 rounded-full border border-purple-400/40"
          style={{
            animation: `pulse 2s ease-in-out infinite`,
            animationDelay: `${delay}s`
          }}
        ></div>
        
        {/* Center core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"
            style={{
              animation: `glow 2s ease-in-out infinite`,
              animationDelay: `${delay}s`
            }}
          ></div>
        </div>

        {/* Orbiting dot */}
        <div 
          className="absolute w-2 h-2 rounded-full bg-purple-300 top-0 left-1/2 -translate-x-1/2"
          style={{
            boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default Satellite;