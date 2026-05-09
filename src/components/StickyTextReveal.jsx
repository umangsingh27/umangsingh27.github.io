import React, { useRef, useEffect, useState } from 'react';
import './StickyTextReveal.css';

/**
 * StickyTextReveal — Scroll-driven text opacity reveal.
 * 
 * Logic:
 * 1. Container height is determined by scrollDistance prop (e.g. '200vh').
 * 2. Inner content is sticky.
 * 3. Text is split into words.
 * 4. Each word's opacity is calculated based on scroll progress relative to its index.
 */
const StickyTextReveal = ({ text, scrollDistance = '200vh' }) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container has passed the viewport
      // 0 = just entered, 1 = just left
      const totalHeight = rect.height;
      const currentScroll = windowHeight - rect.top;
      
      let p = currentScroll / totalHeight;
      p = Math.max(0, Math.min(1, p));
      
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split text into words, preserving line breaks if any (not used here but good practice)
  const words = text.split(' ');

  return (
    <div 
      className="sticky-text-reveal-container" 
      ref={containerRef} 
      style={{ height: scrollDistance }}
    >
      <div className="sticky-text-reveal-inner">
        <p className="sticky-text-reveal-p">
          {words.map((word, i) => {
            // Calculate opacity for this specific word
            // We want the word to start revealing at a certain point in the scroll
            // and be fully visible shortly after.
            const start = i / words.length;
            const end = (i + 1) / words.length;
            
            // Adjust the window of reveal to be smoother
            // We can make it reveal over a span of 10% of the total scroll
            const wordProgress = (progress - start) / (end - start);
            const opacity = Math.max(0.1, Math.min(1, wordProgress));

            return (
              <span 
                key={i} 
                className="sticky-text-word" 
                style={{ opacity }}
              >
                {word}{' '}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default StickyTextReveal;
