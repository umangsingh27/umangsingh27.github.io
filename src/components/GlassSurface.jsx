/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect, useState, useRef, useId } from 'react';
import './GlassSurface.css';

/**
 * GlassSurface — Final Optimized Apple Liquid Glass refractive material.
 * 
 * Performance optimizations applied:
 *  1. ResizeObserver is DEBOUNCED — prevents layout thrashing.
 *  2. Blob URLs for maps — extremely reliable in production/deployment.
 *  3. useLayoutEffect injection — bypasses build-time CSS minification.
 *  4. Organic Gradients — eliminates 'star' artifacts.
 */
const GlassSurface = ({
  children,
  width = '100%',
  height = '100%',
  borderRadius = 50,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0.8,
  backgroundOpacity = 0.12,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
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
  const [blobUrl, setBlobUrl] = useState(null);

  const containerRef = useRef(null);
  const lastW = useRef(0);
  const lastH = useRef(0);
  const resizeTimer = useRef(null);

  useEffect(() => {
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                   (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    const lowPower = navigator.deviceMemory && navigator.deviceMemory < 4;
    
    // Webkit (Safari) and Firefox are notoriously buggy with SVG displacement maps in backdrop-filter.
    const isUnsupported = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || 
                          /Firefox/.test(navigator.userAgent);

    setIsLowEnd(mobile || lowPower);
    setSvgSupported(!isUnsupported && supportsSVGFilters(filterId));
  }, []);

  const generateMapBlob = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = `
      <svg width="${actualWidth}" height="${actualHeight}" viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
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

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    if (blobUrl) URL.revokeObjectURL(blobUrl);
    const newUrl = URL.createObjectURL(blob);
    setBlobUrl(newUrl);
  };

  useLayoutEffect(() => {
    if (!containerRef.current || isLowEnd || !svgSupported) return;

    const update = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);

      if (w === lastW.current && h === lastH.current) return;
      lastW.current = w;
      lastH.current = h;
      generateMapBlob();
    };

    update();
    const observer = new ResizeObserver(() => {
      clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(update, 32);
    });

    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [svgSupported, isLowEnd, borderRadius, borderWidth, brightness, opacity, blur]);

  // Inject the backdrop-filter directly to the DOM to bypass CSS minifiers
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    
    if (svgSupported && !isLowEnd) {
      const filterValue = `url(#${filterId}) saturate(${saturation})`;
      containerRef.current.style.backdropFilter = filterValue;
      containerRef.current.style.webkitBackdropFilter = filterValue;
    } else {
      // Clean fallback string
      const fallbackValue = `blur(12px) saturate(1.8) brightness(1.1)`;
      containerRef.current.style.backdropFilter = fallbackValue;
      containerRef.current.style.webkitBackdropFilter = fallbackValue;
    }
  }, [svgSupported, isLowEnd, saturation, filterId]);

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
  };

  return (
    <div
      ref={containerRef}
      className={`glass-surface ${svgSupported && !isLowEnd ? 'glass-surface--svg' : 'glass-surface--fallback'} ${className}`}
      style={containerStyle}
    >
      {svgSupported && !isLowEnd && (
        <svg className="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
              {blobUrl && <feImage href={blobUrl} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />}

              <feDisplacementMap in="SourceGraphic" in2="map" scale={distortionScale + redOffset} xChannelSelector={xChannel} yChannelSelector={yChannel} result="dispRed" />
              <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />

              <feDisplacementMap in="SourceGraphic" in2="map" scale={distortionScale + greenOffset} xChannelSelector={xChannel} yChannelSelector={yChannel} result="dispGreen" />
              <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />

              <feDisplacementMap in="SourceGraphic" in2="map" scale={distortionScale + blueOffset} xChannelSelector={xChannel} yChannelSelector={yChannel} result="dispBlue" />
              <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />

              <feBlend in="red" in2="green" mode="screen" result="rg" />
              <feBlend in="rg" in2="blue" mode="screen" result="output" />

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
  const div = document.createElement('div');
  div.style.backdropFilter = `url(#${filterId})`;
  return div.style.backdropFilter !== '';
}
