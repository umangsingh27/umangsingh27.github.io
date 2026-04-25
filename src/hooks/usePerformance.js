import { useEffect } from 'react'

export function usePerformance() {
  useEffect(() => {
    // Core Web Vitals tracking
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }

    // Performance Observer for Resource Timing
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              console.log('Navigation Timing:', {
                domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
                loadComplete: entry.loadEventEnd - entry.loadEventStart,
                resourceDownload: entry.responseEnd - entry.fetchStart,
              })
            }
            if (entry.entryType === 'paint') {
              console.log(`${entry.name}: ${Math.round(entry.startTime)}ms`)
            }
          }
        })

        observer.observe({
          entryTypes: ['navigation', 'paint', 'largest-contentful-paint'],
        })

        return () => observer.disconnect()
      } catch (e) {
        // Silent fail for unsupported browsers
      }
    }
  }, [])
}

// Log image load performance
export function logImagePerformance(imageName, startTime) {
  const loadTime = performance.now() - startTime
  if (loadTime > 1000) {
    console.warn(`Image ${imageName} took ${loadTime.toFixed(2)}ms to load`)
  }
}
