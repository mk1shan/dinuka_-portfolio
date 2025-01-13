import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styled from '@emotion/styled';

// Styled component for ScrollReveal
const ScrollRevealWrapper = styled(motion.div)`
  will-change: transform, opacity;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  @media (max-width: 768px) {
    transform: translateZ(0);
    perspective: 1000;
    -webkit-perspective: 1000;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }

  @supports not (animation-name: none) {
    opacity: 1 !important;
    transform: none !important;
  }
`;

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  duration?: number;
  distance?: number;
  scale?: number;
}

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  duration = 0.8,
  distance = 50,
  scale = 1
}: ScrollRevealProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    const handler = () => requestAnimationFrame(checkMobile);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const getInitialProps = () => {
    if (prefersReducedMotion) return { opacity: 1 };
    
    const mobileDistance = isMobile ? distance * 0.6 : distance;
    const initial = { opacity: 0, scale };

    switch (direction) {
      case 'up': return { ...initial, y: mobileDistance };
      case 'down': return { ...initial, y: -mobileDistance };
      case 'left': return { ...initial, x: -mobileDistance };
      case 'right': return { ...initial, x: mobileDistance };
      default: return initial;
    }
  };

  return (
    <ScrollRevealWrapper
      initial={getInitialProps()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{
        once: true,
        margin: isMobile ? '0px' : '-50px',
        amount: isMobile ? 0.1 : 0.2
      }}
      transition={{
        duration: isMobile ? duration * 0.8 : duration,
        delay,
        type: 'spring',
        bounce: 0.1,
        stiffness: 100,
        damping: 15
      }}
      className={className}
    >
      {children}
    </ScrollRevealWrapper>
  );
};

export default ScrollReveal;
