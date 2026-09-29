import { useState, useRef, useEffect } from 'react'
import imageVariants from '../imageVariants.json'

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

  // Reset load state when the source changes, and handle images already
  // cached (which may fire onLoad synchronously before this effect runs)
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true)
    } else {
      setIsLoaded(false)
    }
  }, [src])

  const variantKey = src.replace(/\.(png|jpe?g|webp)$/i, '')
  const variants = imageVariants[variantKey]
  const base = import.meta.env.BASE_URL.replace(/\/$/, '') + variantKey
  const srcset = (format) => variants?.[format]?.map(w => `${base}-${w}w.${format} ${w}w`).join(', ')

  const fullSrc = src.startsWith('http')
    ? src
    : import.meta.env.BASE_URL.replace(/\/$/, '') + src

  const { width, height } = variants || {}

  return (
    <div
      className={`lazy-image-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: isLoaded ? 'transparent' : 'rgba(0,0,0,0.04)',
        ...(width && height ? { aspectRatio: `${width} / ${height}` } : {}),
        ...style
      }}
    >
      <picture>
        {variants?.webp && <source type="image/webp" srcSet={srcset('webp')} sizes={sizes} />}
        {variants?.jpeg && <source type="image/jpeg" srcSet={srcset('jpeg')} sizes={sizes} />}
        <img
          ref={imgRef}
          src={fullSrc}
          alt={alt}
          width={width}
          height={height}
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
