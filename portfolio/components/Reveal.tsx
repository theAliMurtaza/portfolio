'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
