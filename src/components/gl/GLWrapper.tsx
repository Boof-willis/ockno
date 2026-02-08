import { GL } from './index';
import { useState, useEffect } from 'react';

export default function GLWrapper() {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Find all CTA buttons and add hover listeners
    const ctaButtons = document.querySelectorAll('[data-particle-hover]');
    
    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);
    
    ctaButtons.forEach(button => {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      ctaButtons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <GL hovering={hovering} />;
}
