import { useEffect } from 'react'

export function useCountAnimation(threshold = 0.3) {
  useEffect(() => {
    const countEls = document.querySelectorAll('[data-count-to]')
    if (!countEls.length) return

    const rafIds = new Map()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          if (el.dataset.counted === 'true') return
          el.dataset.counted = 'true'

          const target = parseFloat(el.dataset.countTo)
          const suffix = el.dataset.suffix ?? ''
          if (reduceMotion || !Number.isFinite(target)) {
            el.textContent = `${target}${suffix}`
            observer.unobserve(el)
            return
          }

          const duration = 1200
          const startTime = performance.now()
          const easeOut = (t) => 1 - Math.pow(1 - t, 3)
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            el.textContent = `${Math.round(easeOut(progress) * target)}${suffix}`
            if (progress < 1) rafIds.set(el, requestAnimationFrame(tick))
            else rafIds.delete(el)
          }

          rafIds.set(el, requestAnimationFrame(tick))
          observer.unobserve(el)
        })
      },
      { threshold }
    )

    if (!observer) {
      countEls.forEach((el) => {
        el.textContent = `${el.dataset.countTo}${el.dataset.suffix ?? ''}`
        el.dataset.counted = 'true'
      })
      return
    }
    countEls.forEach((el) => observer.observe(el))

    return () => {
      rafIds.forEach((rafId) => cancelAnimationFrame(rafId))
      observer.disconnect()
    }
  }, [threshold])
}
