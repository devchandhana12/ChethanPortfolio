import React, { useEffect, useState } from 'react';

const ShootingStar = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const star = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        top: Math.random() * 50,
        duration: 1 + Math.random() * 2,
        delay: Math.random() * 3
      };
      return star;
    };

    const interval = setInterval(() => {
      setStars(prev => {
        const newStars = [...prev, createStar()];
        // Keep only recent stars
        return newStars.slice(-5);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-purple-400 rounded-full shooting-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animation: `shoot ${star.duration}s ease-out`,
            animationDelay: `${star.delay}s`,
            boxShadow: '0 0 10px 2px rgba(168, 85, 247, 0.8)'
          }}
        >
          <div className="absolute w-20 h-0.5 bg-gradient-to-r from-purple-400 to-transparent -left-20"></div>
        </div>
      ))}
    </div>
  );
};

export default ShootingStar;