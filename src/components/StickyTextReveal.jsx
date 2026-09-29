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

  const paragraphs = text.split('\n').map(p => p.trim().split(/\s+/));
  const totalWords = paragraphs.reduce((sum, p) => sum + p.length, 0);
  let wordIndex = 0;

  return (
    <div
      className="sticky-text-reveal-container"
      ref={containerRef}
      style={{ height: scrollDistance }}
    >
      <div className="sticky-text-reveal-inner">
        <div className="sticky-text-reveal-body">
        {paragraphs.map((words, pIdx) => (
        <p className="sticky-text-reveal-p" key={pIdx}>
          {words.map((word) => {
            const i = wordIndex++;
            // Finish revealing at 85% so the full text holds on screen before the sticky block releases.
            const revealProgress = Math.min(1, progress / 0.85);
            const start = i / totalWords;
            const end = (i + 1) / totalWords;
            const wordProgress = (revealProgress - start) / (end - start);
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
        ))}
        </div>
      </div>
    </div>
  );
};

export default StickyTextReveal;
