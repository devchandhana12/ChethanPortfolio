import React from 'react';

const AstronautRocket = ({ position = 'top-right', delay = 0 }) => {
  const positions = {
    'top-right': 'top-32 right-20',
    'bottom-left': 'bottom-32 left-20',
    'middle-right': 'top-1/2 right-10',
    'middle-left': 'top-1/2 left-10'
  };

  return (
    <div 
      className={`fixed ${positions[position]} pointer-events-none z-5 hidden lg:block`}
      style={{
        animation: `astronautFloat 25s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <div className="relative">
        {/* Rocket body */}
        <div className="relative">
          {/* Main rocket */}
          <div className="w-20 h-32 relative">
            {/* Rocket nose */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-purple-700 z-20"></div>
            
            {/* Rocket body */}
            <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-10 h-20 bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900 rounded-t-lg shadow-2xl shadow-purple-700/50 z-10">
              {/* Window */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full border-2 border-purple-600 shadow-inner">
                {/* Astronaut face */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs">😊</div>
                </div>
              </div>
              
              {/* Rocket details */}
              <div className="absolute bottom-2 left-1 right-1 h-1 bg-purple-500 rounded-full"></div>
              <div className="absolute bottom-4 left-1 right-1 h-1 bg-purple-500 rounded-full"></div>
            </div>
            
            {/* Rocket fins */}
            <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[15px] border-r-[8px] border-t-purple-800 border-r-transparent z-0"></div>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[15px] border-l-[8px] border-t-purple-800 border-l-transparent z-0"></div>
            
            {/* Exhaust flame */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-0">
              <div 
                className="w-8 h-12 bg-gradient-to-b from-orange-500 via-red-500 to-transparent rounded-full"
                style={{
                  animation: 'flameFlicker 0.2s ease-in-out infinite',
                  filter: 'blur(3px)'
                }}
              ></div>
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-10 bg-gradient-to-b from-yellow-400 via-orange-400 to-transparent rounded-full"
                style={{
                  animation: 'flameFlicker 0.15s ease-in-out infinite',
                  animationDelay: '0.1s',
                  filter: 'blur(2px)'
                }}
              ></div>
            </div>
            
            {/* Sparkles */}
            <div 
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-300 rounded-full"
              style={{ animation: 'sparkle1 1s ease-out infinite' }}
            ></div>
            <div 
              className="absolute -bottom-16 left-1/4 w-1 h-1 bg-orange-300 rounded-full"
              style={{ animation: 'sparkle2 1.2s ease-out infinite' }}
            ></div>
            <div 
              className="absolute -bottom-18 right-1/4 w-1 h-1 bg-red-300 rounded-full"
              style={{ animation: 'sparkle3 0.9s ease-out infinite' }}
            ></div>
          </div>

          {/* Trailing smoke particles */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2">
            <div 
              className="w-3 h-3 bg-gray-400/30 rounded-full"
              style={{ animation: 'smoke1 2s ease-out infinite' }}
            ></div>
          </div>
          <div className="absolute -bottom-32 left-1/3">
            <div 
              className="w-2 h-2 bg-gray-400/20 rounded-full"
              style={{ animation: 'smoke2 2.5s ease-out infinite' }}
            ></div>
          </div>
        </div>

        {/* Stars around rocket */}
        <div className="absolute -top-5 -left-10 text-yellow-300 text-xs animate-pulse">✨</div>
        <div className="absolute -top-8 right-5 text-yellow-300 text-xs animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute top-1/2 -right-12 text-yellow-300 text-xs animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
      </div>
    </div>
  );
};

export default AstronautRocket;
