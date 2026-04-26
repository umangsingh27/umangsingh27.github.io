import { useEffect, useState } from 'react'
import './Cursor.css'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorType, setCursorType] = useState('default') // default, link, media

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .magnetic-pull, .work-card')
      if (target) {
        setIsHovering(true)
        if (target.classList.contains('work-card') || target.closest('.work-card')) {
          setCursorType('media')
        } else {
          setCursorType('link')
        }
      } else {
        setIsHovering(false)
        setCursorType('default')
      }
    }

    const handleWindowLeave = () => {
      document.body.classList.add('cursor-hidden')
    }
    
    const handleWindowEnter = () => {
      document.body.classList.remove('cursor-hidden')
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)
    document.documentElement.addEventListener('mouseleave', handleWindowLeave)
    document.documentElement.addEventListener('mouseenter', handleWindowEnter)

    // Hide default cursor
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      document.documentElement.removeEventListener('mouseleave', handleWindowLeave)
      document.documentElement.removeEventListener('mouseenter', handleWindowEnter)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <div 
      className={`custom-cursor custom-cursor--${cursorType} ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      style={{ 
        transform: `translate3d(${position.x}px, ${position.y}px, 0)` 
      }}
    >
      <div className="cursor-inner">
        {cursorType === 'media' && <span className="cursor-text">VIEW</span>}
      </div>
    </div>
  )
}
