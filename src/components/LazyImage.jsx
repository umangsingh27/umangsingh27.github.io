import { useState, useEffect, useRef } from 'react'

export default function LazyImage({
  src,
  alt,
  className = '',
  priority = false,
}) {
  const [isLoaded, setIsLoaded] = useState(priority)
  const [imageSrc, setImageSrc] = useState(priority ? src : null)
  const imgRef = useRef(null)

  useEffect(() => {
    if (priority || !imgRef.current) return

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '50px' }
    )

    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [src, priority])

  return (
    <img
      ref={imgRef}
      src={imageSrc || src}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      onLoad={() => setIsLoaded(true)}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
