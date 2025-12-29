import React from 'react';

const AstronautRocket = ({ startPosition = 'left', delay = 0, duration = 20 }) => {
  // Different starting positions
  const startPositions = {
    'left-top': { top: '10%', left: '-100px' },
    'left-middle': { top: '40%', left: '-100px' },
    'left-bottom': { top: '70%', left: '-100px' },
    'right-top': { top: '20%', right: '-100px' },
    'right-bottom': { top: '60%', right: '-100px' }
  };

  const position = startPositions[startPosition] || startPositions['left-top'];

  return (
    <div 
      className="fixed pointer-events-none z-5 hidden lg:block"
      style={{
        ...position,
        animation: `flyAcross${startPosition.includes('right') ? 'Left' : 'Right'} ${duration}s linear infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <div className="relative transform scale-50">
        {/* Main Rocket Body */}
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rocket Body */}
          <defs>
            <linearGradient id={`rocketGradient-${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#6d28d9" />
              <stop offset="100%" stopColor="#5b21b6" />
            </linearGradient>
            <linearGradient id={`windowGradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <filter id={`glow-${delay}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Rocket Nose Cone */}
          <path d="M30 5 L40 25 L20 25 Z" fill={`url(#rocketGradient-${delay})`} stroke="#9333ea" strokeWidth="1"/>
          
          {/* Main Body */}
          <rect x="20" y="25" width="20" height="40" fill={`url(#rocketGradient-${delay})`} stroke="#9333ea" strokeWidth="1" rx="2"/>
          
          {/* Window with Astronaut */}
          <circle cx="30" cy="40" r="8" fill={`url(#windowGradient-${delay})`} stroke="#7c3aed" strokeWidth="2" filter={`url(#glow-${delay})`}/>
          <circle cx="28" cy="38" r="2" fill="#1e293b"/>
          <circle cx="32" cy="38" r="2" fill="#1e293b"/>
          <path d="M26 42 Q30 45 34 42" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          
          {/* Body Details */}
          <rect x="22" y="50" width="16" height="2" fill="#a855f7" opacity="0.6"/>
          <rect x="22" y="55" width="16" height="2" fill="#a855f7" opacity="0.6"/>
          
          {/* Fins */}
          <path d="M20 60 L15 75 L20 70 Z" fill="#6d28d9" stroke="#9333ea" strokeWidth="1"/>
          <path d="M40 60 L45 75 L40 70 Z" fill="#6d28d9" stroke="#9333ea" strokeWidth="1"/>
          
          {/* Bottom thruster */}
          <rect x="24" y="65" width="12" height="5" fill="#5b21b6" stroke="#9333ea" strokeWidth="1"/>
          
          {/* Exhaust flames */}
          <g className="flame-animation">
            <ellipse cx="30" cy="75" rx="8" ry="15" fill={`url(#flameGradient-${delay})`} opacity="0.9"/>
            <ellipse cx="30" cy="78" rx="6" ry="12" fill="#f59e0b" opacity="0.8"/>
            <ellipse cx="30" cy="80" rx="4" ry="8" fill="#fbbf24" opacity="0.7"/>
          </g>
          
          <defs>
            <linearGradient id={`flameGradient-${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>

        {/* Sparkle particles around rocket */}
        <div className="absolute -top-4 -left-6 text-yellow-400 text-sm animate-pulse">✨</div>
        <div className="absolute -top-6 -right-4 text-yellow-300 text-sm animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute top-10 -right-8 text-yellow-400 text-xs animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute top-20 -left-6 text-yellow-300 text-xs animate-pulse" style={{ animationDelay: '1.5s' }}>⭐</div>

        {/* Smoke trail */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2">
          <div 
            className="w-4 h-4 bg-gray-400/20 rounded-full blur-sm"
            style={{ animation: 'smoke1 3s ease-out infinite' }}
          ></div>
        </div>
        <div className="absolute top-28 left-1/3">
          <div 
            className="w-3 h-3 bg-gray-400/15 rounded-full blur-sm"
            style={{ animation: 'smoke2 3.5s ease-out infinite' }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flameFlicker {
          0%, 100% { transform: scaleY(1); opacity: 0.9; }
          50% { transform: scaleY(1.2); opacity: 1; }
        }
        .flame-animation {
          animation: flameFlicker 0.15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AstronautRocket;
