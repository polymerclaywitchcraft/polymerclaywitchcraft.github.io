import React from 'react';

export const Background = () => (
  <div className="absolute inset-0 bg-black">
    <div 
      className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-20"
      style={{
        backgroundImage: `url(/background.jpeg)`,
        filter: 'grayscale(20%) contrast(120%)'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
  </div>
);