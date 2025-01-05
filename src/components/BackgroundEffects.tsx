import React from 'react';
import { Star, Moon } from 'lucide-react';

export const BackgroundEffects = () => (
  <>
    {[...Array(20)].map((_, i) => (
      <Star
        key={i}
        className="absolute animate-pulse text-red-900/20"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 20 + 10}px`,
          height: `${Math.random() * 20 + 10}px`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}
    <Moon className="absolute top-20 right-20 w-32 h-32 text-red-900/10 rotate-45" />
  </>
);