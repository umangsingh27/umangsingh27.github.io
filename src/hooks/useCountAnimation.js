import { useEffect } from 'react'

export function useCountAnimation(threshold = 0.3) {
  useEffect(() => {
    const countEls = document.querySelectorAll('[data-count-to]')
    if (!countEls.length) return

    let rafId = null

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target

          // Idempotency check for StrictMode
          if (el.dataset.counted === 'true') return
          el.dataset.counted = 'true'

          const target = parseFloat(el.dataset.countTo)
          const suffix = el.dataset.suffix ?? ''
          const duration = 1200
          const startTime = performance.now()
          const easeOut = (t) => 1 - Math.pow(1 - t, 3)

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            el.textContent = Math.round(easeOut(progress) * target) + suffix
            if (progress < 1) rafId = requestAnimationFrame(tick)
          }

          rafId = requestAnimationFrame(tick)
          obs.unobserve(el)
        })
      },
      { threshold }
    )

    countEls.forEach((el) => obs.observe(el))

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      obs.disconnect()
    }
  }, [threshold])
}
