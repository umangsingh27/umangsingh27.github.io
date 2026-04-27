/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef, useId } from 'react';
import './GlassSurface.css';

/**
 * GlassSurface — Optimized Apple Liquid Glass refractive material.
 * 
 * Performance optimizations applied:
 *  1. ResizeObserver is DEBOUNCED — prevents layout thrashing during resize.
 *  2. Cached dimensions — skips SVG re-encoding if size hasn't changed.
 *  3. Static supportsSVGFilters — UA parsing happens once per app lifecycle.
 *  4. Isolated Layers — avoids global will-change to save GPU memory.
 */
const GlassSurface = ({
  children,
  width = '100%',
  height = '100%',
  borderRadius = 50,
  borderWidth = 0.01,
  brightness = 50,
  opacity = 0.1,
  blur = 8,
  displace = 2.0,
  backgroundOpacity = 0.12,
  saturation = 1,
  distortionScale = -40.0,
  redOffset = 10,
  greenOffset = 10,
  blueOffset = 10,
  xChannel = 'R',
  yChannel = 'G',
  mixBlendMode = 'difference',
  className = '',
  style = {},
  asLayer = false,
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = `glass-filter-${uniqueId}`;
  const redGradId = `red-grad-${uniqueId}`;
  const blueGradId = `blue-grad-${uniqueId}`;

  const [svgSupported, setSvgSupported] = useState(false);
  const [isLowEnd, setIsLowEnd] = useState(false);

  const containerRef = useRef(null);
  const feImageRef = useRef(null);

  // Dimensions caching
  const lastW = useRef(0);
  const lastH = useRef(0);
  const resizeTimer = useRef(null);

  useEffect(() => {
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const lowPower = navigator.deviceMemory && navigator.deviceMemory < 4;
    setIsLowEnd(mobile || lowPower);
    setSvgSupported(supportsSVGFilters(filterId));
  }, []);

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    // CRITICAL: We restore the internal filter:blur() on the inner rectangle.
    // This is what creates the smooth "liquid" transition.
    const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  };

  const updateDisplacementMap = () => {
    if (!feImageRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const w = Math.round(rect.width);
    const h = Math.round(rect.height);

    if (w === lastW.current && h === lastH.current) return;

    lastW.current = w;
    lastH.current = h;
    feImageRef.current.setAttribute('href', generateDisplacementMap());
  };

  useEffect(() => {
    if (!containerRef.current) return;
    updateDisplacementMap();

    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(updateDisplacementMap, 16); // ~1 frame delay
    });

    resizeObserver.observe(containerRef.current);
    return () => {
      clearTimeout(resizeTimer.current);
      resizeObserver.disconnect();
    };
  }, []);

  const containerStyle = {
    ...style,
    width: asLayer ? '100%' : (typeof width === 'number' ? `${width}px` : width),
    height: asLayer ? '100%' : (typeof height === 'number' ? `${height}px` : height),
    borderRadius: `${borderRadius}px`,
    position: asLayer ? 'absolute' : 'relative',
    inset: asLayer ? 0 : 'auto',
    pointerEvents: asLayer ? 'none' : 'auto',
    '--glass-frost': backgroundOpacity,
    '--glass-saturation': saturation,
    '--filter-id': isLowEnd ? 'none' : `url(#${filterId})`,
  };

  return (
    <div
      ref={containerRef}
      className={`glass-surface ${svgSupported && !isLowEnd ? 'glass-surface--svg' : 'glass-surface--fallback'} ${className}`}
      style={containerStyle}
    >
      {!isLowEnd && (
        <svg className="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
              <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

              <feDisplacementMap in="SourceGraphic" in2="map" scale={distortionScale + redOffset} xChannelSelector={xChannel} yChannelSelector={yChannel} result="dispRed" />
              <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />

              <feDisplacementMap in="SourceGraphic" in2="map" scale={distortionScale + greenOffset} xChannelSelector={xChannel} yChannelSelector={yChannel} result="dispGreen" />
              <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />

              <feDisplacementMap in="SourceGraphic" in2="map" scale={distortionScale + blueOffset} xChannelSelector={xChannel} yChannelSelector={yChannel} result="dispBlue" />
              <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />

              <feBlend in="red" in2="green" mode="screen" result="rg" />
              <feBlend in="rg" in2="blue" mode="screen" result="output" />

              {/* Restore final Gaussian blur for refractive smoothing */}
              <feGaussianBlur in="output" stdDeviation={displace} />
            </filter>
          </defs>
        </svg>
      )}

      {!asLayer && <div className="glass-surface__content">{children}</div>}
    </div>
  );
};

export default GlassSurface;

function supportsSVGFilters(filterId) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;

  const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
  const isFirefox = /Firefox/.test(navigator.userAgent);
  if (isWebkit || isFirefox) return false;

  const div = document.createElement('div');
  div.style.backdropFilter = `url(#${filterId})`;
  return div.style.backdropFilter !== '';
}
