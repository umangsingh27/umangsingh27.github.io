import { useState } from 'react'

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
  const [hasError, setHasError] = useState(false)

  const base = src.startsWith('http') 
    ? src.replace(/\.(png|jpe?g)$/i, '') 
    : (import.meta.env.BASE_URL.replace(/\/$/, '') + src).replace(/\.(png|jpe?g)$/i, '')

  // Generate srcset for WebP and fallback
  const webpSrcset = [480, 768, 1280, 1920]
    .map(w => `${base}-${w}w.webp ${w}w`)
    .join(', ')

  const fallbackSrcset = [480, 768, 1280, 1920]
    .map(w => `${base}-${w}w.jpeg ${w}w`)
    .join(', ')

  const fullSrc = src.startsWith('http') ? src : import.meta.env.BASE_URL.replace(/\/$/, '') + src

  return (
    <div 
      className={`lazy-image-container ${className}`} 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        backgroundColor: isLoaded ? 'transparent' : 'rgba(0,0,0,0.05)',
        borderRadius: 'inherit',
        ...style 
      }}
    >
      <picture>
        <source type="image/webp" srcSet={webpSrcset} sizes={sizes} />
        <source type="image/jpeg" srcSet={fallbackSrcset} sizes={sizes} />
        <img
          src={fullSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading={priority ? 'eager' : 'lazy'}
          {...(priority ? { fetchpriority: 'high' } : {})}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: isLoaded ? 'none' : 'blur(10px)',
            transform: isLoaded ? 'scale(1)' : 'scale(1.02)',
            ...imgStyle
          }}
        />
      </picture>
      {hasError && !isLoaded && (
        <div style={{ padding: '20px', textAlign: 'center', fontSize: '12px', color: '#999' }}>
          Image failed to load
        </div>
      )}
    </div>
  )
}
