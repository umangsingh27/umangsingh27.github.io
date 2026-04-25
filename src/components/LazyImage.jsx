import { useState, useEffect, useRef } from 'react'

export default function LazyImage({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, 80vw',
  priority = false,
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState(null)
  const imgRef = useRef(null)

  // Extract base filename without extension
  const getBaseName = (path) => {
    const filename = path.split('/').pop()
    return filename.replace(/\.[^/.]+$/, '')
  }

  // Get directory path
  const getDir = (path) => {
    return path.substring(0, path.lastIndexOf('/'))
  }

  const baseName = getBaseName(src)
  const dirPath = getDir(src)
  const webpSrc = `${dirPath}/${baseName}.webp`

  // Responsive image sources
  const srcSet = `
    ${dirPath}/${baseName}-480w.webp 480w,
    ${dirPath}/${baseName}-768w.webp 768w,
    ${dirPath}/${baseName}-1280w.webp 1280w,
    ${dirPath}/${baseName}-1920w.webp 1920w
  `.trim()

  const fallbackSrcSet = `
    ${dirPath}/${baseName}-480w.jpeg 480w,
    ${dirPath}/${baseName}-768w.jpeg 768w,
    ${dirPath}/${baseName}-1280w.jpeg 1280w,
    ${dirPath}/${baseName}-1920w.jpeg 1920w
  `.trim()

  useEffect(() => {
    if (!imgRef.current) return

    if (priority) {
      // For priority images, load immediately
      setImageSrc(src)
      return
    }

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
    <picture ref={imgRef}>
      {imageSrc && (
        <>
          <source
            srcSet={srcSet}
            sizes={sizes}
            type="image/webp"
          />
          <source
            srcSet={fallbackSrcSet}
            sizes={sizes}
            type="image/jpeg"
          />
          <img
            src={imageSrc}
            alt={alt}
            className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            decoding="async"
          />
        </>
      )}
      {!imageSrc && (
        <img
          src={src}
          alt={alt}
          className={`${className} loading`}
          loading="lazy"
          decoding="async"
        />
      )}
    </picture>
  )
}
