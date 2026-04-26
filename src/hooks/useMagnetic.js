import { useEffect } from 'react'

export function useMagnetic() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const target = e.target.closest('.magnetic-pull')
      
      // Reset all other elements
      document.querySelectorAll('.magnetic-pull').forEach(el => {
        if (el !== target && el.style.transform !== '') {
          el.style.transform = ''
          el.style.transition = ''
        }
      })

      if (!target) return

      const rect = target.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      
      const pull = 0.4
      
      target.style.transition = 'none' // Disable CSS transitions while pulling
      target.style.transform = `translate3d(${distanceX * pull}px, ${distanceY * pull}px, 0)`
    }

    const handleMouseLeave = () => {
      document.querySelectorAll('.magnetic-pull').forEach(el => {
        el.style.transform = ''
        el.style.transition = ''
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
}
