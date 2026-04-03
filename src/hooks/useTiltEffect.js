import { useEffect, useRef } from 'react';

export const useTiltEffect = (options = { max: 15, perspective: 1000, scale: 1.02 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMove = (e) => {
      let clientX, clientY;
      
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const rect = node.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // Prevent crazy rotations when touch dragging outside the element
      if (e.touches && (x < -20 || x > rect.width + 20 || y < -20 || y > rect.height + 20)) {
        handleLeave();
        return;
      }
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -options.max;
      const rotateY = ((x - centerX) / centerX) * options.max;
      
      node.style.transform = `perspective(${options.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${options.scale})`;
    };

    const handleLeave = () => {
      node.style.transform = `perspective(${options.perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    node.addEventListener('touchmove', handleMove, { passive: true });
    node.addEventListener('touchend', handleLeave);

    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
      node.removeEventListener('touchmove', handleMove);
      node.removeEventListener('touchend', handleLeave);
    };
  }, [options.max, options.perspective, options.scale]);

  return ref;
};
