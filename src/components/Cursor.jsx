import { useEffect, useRef } from 'react'
import './Cursor.css'

/**
 * Cursor — zero-React-state implementation.
 * All position updates go straight to the DOM via requestAnimationFrame
 * and CSS custom properties, so React never re-renders on mousemove.
 */
export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    let rafId = null
    let rawX = 0
    let rawY = 0
    // Smoothed positions for lerp
    let lerpX = 0
    let lerpY = 0
    let needsRaf = false

    // Track current type to avoid redundant className operations
    let currentType = 'default'
    let currentHovering = false
    let currentClicking = false

    const LERP = 0.18 // Lower = more lag, higher = snappier

    const applyType = (type, hovering, clicking) => {
      if (type !== currentType || hovering !== currentHovering || clicking !== currentClicking) {
        el.className = [
          'custom-cursor',
          `custom-cursor--${type}`,
          hovering ? 'hovering' : '',
          clicking ? 'clicking' : '',
        ].filter(Boolean).join(' ')

        // Update inner text
        const inner = el.querySelector('.cursor-inner')
        if (inner) {
          inner.textContent = type === 'media' ? 'VIEW' : ''
        }

        currentType = type
        currentHovering = hovering
        currentClicking = clicking
      }
    }

    const tick = () => {
      rafId = null
      // Lerp toward raw position for smooth trailing feel
      lerpX += (rawX - lerpX) * LERP
      lerpY += (rawY - lerpY) * LERP

      el.style.transform = `translate3d(${lerpX}px, ${lerpY}px, 0)`

      // Keep ticking while there's remaining distance
      const dx = rawX - lerpX
      const dy = rawY - lerpY
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        rafId = requestAnimationFrame(tick)
      }
      needsRaf = false
    }

    const scheduleTick = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(tick)
      }
    }

    const onMouseMove = (e) => {
      rawX = e.clientX
      rawY = e.clientY
      scheduleTick()

      const target = e.target.closest('a, button, .magnetic-pull, .work-card')
      if (target) {
        const isMedia = target.classList.contains('work-card') || target.closest('.work-card')
        applyType(isMedia ? 'media' : 'link', true, currentClicking)
      } else {
        applyType('default', false, currentClicking)
      }
    }

    const onMouseDown = () => applyType(currentType, currentHovering, true)
    const onMouseUp   = () => applyType(currentType, currentHovering, false)

    const onMouseLeave = () => el.classList.add('cursor-hidden')
    const onMouseEnter = () => el.classList.remove('cursor-hidden')

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown, { passive: true })
    window.addEventListener('mouseup',   onMouseUp,   { passive: true })
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    document.body.style.cursor = 'none'

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup',   onMouseUp)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <div ref={cursorRef} className="custom-cursor custom-cursor--default">
      <div className="cursor-inner" />
    </div>
  )
}
