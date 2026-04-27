import { useState, useRef, useEffect } from 'react'

/**
 * LazyImage — zero-jank lazy loading.
 *
 * Performance rules:
 *  1. Use native loading="lazy" — browser-native, zero JS cost
 *  2. Fade-in via opacity ONLY (compositor-only, no repaint)
 *  3. NO filter: blur() during load — blur triggers a full repaint every frame
 *  4. NO transform: scale() during load — when combined with filter, breaks
 *     compositor-only promotion
 *  5. Use will-change: opacity only during the transition, then remove it
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
  style = {},
  imgStyle = {}
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef(null)

  // If image is already cached, it may fire onLoad synchronously before mount
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true)
    }
  }, [])

  const base = src.startsWith('http')
    ? src.replace(/\.(png|jpe?g)$/i, '')
    : (import.meta.env.BASE_URL.replace(/\/$/, '') + src).replace(/\.(png|jpe?g)$/i, '')

  const webpSrcset = [480, 768, 1280, 1920]
    .map(w => `${base}-${w}w.webp ${w}w`)
    .join(', ')

  const fallbackSrcset = [480, 768, 1280, 1920]
    .map(w => `${base}-${w}w.jpeg ${w}w`)
    .join(', ')

  const fullSrc = src.startsWith('http')
    ? src
    : import.meta.env.BASE_URL.replace(/\/$/, '') + src

  return (
    <div
      className={`lazy-image-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'inherit',
        backgroundColor: isLoaded ? 'transparent' : 'rgba(0,0,0,0.04)',
        ...style
      }}
    >
      <picture>
        <source type="image/webp" srcSet={webpSrcset} sizes={sizes} />
        <source type="image/jpeg" srcSet={fallbackSrcset} sizes={sizes} />
        <img
          ref={imgRef}
          src={fullSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          {...(priority ? { fetchpriority: 'high' } : {})}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            // Compositor-only fade — no repaint, no layout
            opacity: isLoaded ? 1 : 0,
            transition: isLoaded ? 'opacity 0.5s ease' : 'none',
            // Remove will-change after transition completes to free GPU memory
            willChange: isLoaded ? 'auto' : 'opacity',
            ...imgStyle
          }}
        />
      </picture>
    </div>
  )
}
