import React from 'react';
import { motion, type Variants } from 'motion/react';

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 32,
    scale: 0.99,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className = '',
  id,
  delay = 0,
}) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: sectionVariants.hidden,
        visible: {
          ...sectionVariants.visible,
          transition: {
            duration: 0.65,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
