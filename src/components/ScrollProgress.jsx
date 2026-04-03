import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProp, setScrollProp] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProp((scrollTotal / height) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '2px', zIndex: 9999, background: 'rgba(255,255,255,0.03)' }}>
      <div style={{
        height: '100%',
        background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.5))',
        width: `${scrollProp}%`,
        transition: 'width 0.1s ease-out',
        boxShadow: '0 0 10px rgba(255,255,255,0.15)'
      }}></div>
    </div>
  );
};

export default ScrollProgress;
