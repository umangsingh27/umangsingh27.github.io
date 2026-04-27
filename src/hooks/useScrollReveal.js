import { useEffect } from 'react'

/**
 * useScrollReveal — IntersectionObserver-based reveal.
 *
 * Perf rules:
 *  1. Runs once on mount, then cleans up (no re-querying on each render)
 *  2. Once element is visible, immediately unobserve (no wasted IO callbacks)
 *  3. Stagger is applied via animationDelay only — no rAF needed
 *  4. The .visible class triggers CSS animations which run on compositor thread
 */
export function useScrollReveal() {
  useEffect(() => {
    const elementsToReveal = Array.from(document.querySelectorAll('.fade-up'))
    if (!elementsToReveal.length) return

    const applyReveal = (el) => {
      el.classList.add('visible')

      // Stagger direct .fade-up-child elements inside the revealed parent
      const staggerChildren = el.querySelectorAll('.fade-up-child')
      staggerChildren.forEach((child, i) => {
        const base = parseFloat(child.dataset.staggerBase || 0)
        child.style.animationDelay = `${base + i * 0.08}s`
        child.classList.add('visible')
      })
    }

    // FIRST PASS: elements already in viewport on load — no need to observe
    const alreadyVisible = []
    elementsToReveal.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        alreadyVisible.push(el)
      }
    })
    // Defer to avoid blocking first paint
    if (alreadyVisible.length) {
      requestAnimationFrame(() => alreadyVisible.forEach(applyReveal))
    }

    // SECOND PASS: IntersectionObserver for scroll-triggered
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            applyReveal(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )

    elementsToReveal.forEach((el) => {
      if (!el.classList.contains('visible')) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

