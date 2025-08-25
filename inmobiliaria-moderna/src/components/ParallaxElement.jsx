import React, { useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const ParallaxElement = ({ 
  children, 
  className = '', 
  speed = 0.5, 
  direction = 'vertical' 
}) => {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    direction === 'vertical' 
      ? [-clientHeight * speed, clientHeight * speed]
      : [0, 0]
  );

  const x = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    direction === 'horizontal' 
      ? [-clientHeight * speed * 0.5, clientHeight * speed * 0.5]
      : [0, 0]
  );

  useEffect(() => {
    const element = document.getElementById('parallax-element');
    if (element) {
      const onResize = () => {
        setElementTop(element.offsetTop);
        setClientHeight(window.innerHeight);
      };
      onResize();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }
  }, []);

  return (
    <motion.div
      id="parallax-element"
      style={{ y: direction === 'vertical' ? y : 0, x: direction === 'horizontal' ? x : 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxElement;

