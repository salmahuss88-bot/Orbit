'use client';

import React, { useState, useEffect } from 'react';

const CustomScrollbar = ({ containerRef }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const thumbHeight = 40;
  const thumbWidth = 9;   

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        
        const totalScrollable = scrollHeight - clientHeight;
        if (totalScrollable <= 0) {
          setScrollPercentage(0);
          return;
        }
        
        const currentScroll = (scrollTop / totalScrollable) * 100;
        setScrollPercentage(currentScroll);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [containerRef]);

  return (
    <div className="flex flex-col items-center py-4 h-full">
      <div className="w-[2px] bg-[#E9ECEF] rounded-full h-full relative overflow-visible flex justify-center">
        
        <div 
          className="absolute rounded-full transition-all duration-100 ease-out shadow-sm"
          style={{ 
            height: `${thumbHeight}px`,
            width: `${thumbWidth}px`,
            borderRadius: '50px', 
            background: 'linear-gradient(180deg, #14ADD6 0%, #384295 100%)',
            left: '50%',
            transform: 'translateX(-50%)',
            top: `${scrollPercentage * (1 - thumbHeight / (containerRef.current?.clientHeight || thumbHeight))}%`,
          }}
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;