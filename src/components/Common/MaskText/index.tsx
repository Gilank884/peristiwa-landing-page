'use client';
import { Body, LineMask } from './styles';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const MaskText = ({ phrases = [], tag }: { phrases?: string[]; tag: string }) => {
  const animate = {
    initial: {
      y: '100%',
    },
    open: (i: number) => ({
      y: '0%',
      transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };

  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: '-10%', amount: 0.4 });

  // Cegah error jika phrases bukan array
  if (!Array.isArray(phrases)) return null;

  return (
    <Body ref={body}>
      {phrases.map((phrase, index) => {
        const MotionTag = {
          h1: motion.h1,
          h2: motion.h2,
          h3: motion.h3,
          p: motion.p,
        }[tag] || motion.p;

        return (
          <LineMask key={index}>
            <MotionTag
              variants={animate}
              initial="initial"
              animate={isInView ? 'open' : ''}
              custom={index}
            >
              {phrase}
            </MotionTag>
          </LineMask>
        );
      })}
    </Body>
  );
};

export default MaskText;
