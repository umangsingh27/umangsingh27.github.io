import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    // Select the elements explicitly tagged via class name for animation.
    // By tagging the <section> level, the entire block animates as one unit.
    const elementsToReveal = document.querySelectorAll('.fade-up')

    // FIRST PASS: Check which elements are already visible on initial page load
    // and immediately trigger their animations to prevent invisible sections on load
    elementsToReveal.forEach((el) => {
      const rect = el.getBoundingClientRect()
      // Element is initially visible if any part of it is in the viewport
      const isInitiallyVisible = rect.top < window.innerHeight && rect.bottom > 0
      if (isInitiallyVisible) {
        // Immediately add visible class to trigger fadeUp animation
        el.classList.add('visible')
      }
    })

    // SECOND PASS: Set up IntersectionObserver for scroll-triggered animations
    // This handles elements that enter the viewport after the initial page load
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only add visible class if not already added (prevents double-animation)
          if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            // Add the visible class when the section enters the viewport
            entry.target.classList.add('visible')
            // Once it's visible, we can stop observing this specific element
            observer.unobserve(entry.target)
          }
        })
      },
      {
        // 0.05 threshold means 5% of the element must be visible before triggering
        // Lower than original 0.15 to catch careful scrolling where sections enter slowly
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px',
      }
    )

    // Observe only elements that aren't already visible
    elementsToReveal.forEach((el) => {
      if (!el.classList.contains('visible')) {
        observer.observe(el)
      }
    })

    // Cleanup: Disconnect the observer when the component unmounts
    return () => {
      observer.disconnect()
    }
  }, [])
}
