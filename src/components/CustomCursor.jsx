import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_15px_#00FFA3]"
        style={{ backgroundColor: '#00FFA3' }}
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6, scale: isHovering ? 0 : 1 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 rounded-full pointer-events-none z-[9998] flex items-center justify-center backdrop-blur-sm"
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20, 
          scale: isHovering ? 1.5 : 1, 
          backgroundColor: isHovering ? 'rgba(0, 255, 163, 0.1)' : 'transparent', 
          borderColor: isHovering ? '#00FFA3' : '#00D080' 
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      />
    </div>
  );
};

export default CustomCursor;