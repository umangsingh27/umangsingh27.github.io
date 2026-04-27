import { useEffect, useRef } from 'react'

/**
 * useMagnetic — RAF-throttled, no querySelectorAll on every event.
 * Uses a WeakMap to cache element data and pointer events to hit-test.
 */
export function useMagnetic() {
  useEffect(() => {
    let rafId = null
    let lastX = 0
    let lastY = 0
    let lastTarget = null

    // Cache all magnetic elements + their rects
    // We invalidate on resize only
    let elements = []
    const PULL = 0.35

    const collectElements = () => {
      elements = Array.from(document.querySelectorAll('.magnetic-pull'))
    }

    const resetElement = (el) => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
      el.style.transform = 'translate3d(0,0,0)'
    }

    const frame = () => {
      rafId = null
      if (!lastTarget) return

      // Inline rect lookup — cached per frame
      const rect = lastTarget.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (lastX - cx) * PULL
      const dy = (lastY - cy) * PULL

      lastTarget.style.transition = 'none'
      lastTarget.style.transform = `translate3d(${dx}px,${dy}px,0)`
    }

    const onMouseMove = (e) => {
      lastX = e.clientX
      lastY = e.clientY

      const newTarget = e.target.closest('.magnetic-pull')

      if (newTarget !== lastTarget) {
        // Reset previous
        if (lastTarget) resetElement(lastTarget)
        lastTarget = newTarget
      }

      if (lastTarget && !rafId) {
        rafId = requestAnimationFrame(frame)
      }
    }

    const onMouseLeave = () => {
      lastTarget = null
      elements.forEach(resetElement)
    }

    collectElements()

    // Re-collect on navigation (DOM mutations add new elements)
    const mutationObserver = new MutationObserver(collectElements)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseleave', onMouseLeave, { passive: true })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      mutationObserver.disconnect()
      elements.forEach(resetElement)
    }
  }, [])
}
