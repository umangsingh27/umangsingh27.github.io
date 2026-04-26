import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const elementsToReveal = document.querySelectorAll('.fade-up')

    // FIRST PASS: elements already in viewport on load
    elementsToReveal.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const isInitiallyVisible = rect.top < window.innerHeight && rect.bottom > 0
      if (isInitiallyVisible) applyReveal(el)
    })

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

function applyReveal(el) {
  el.classList.add('visible')

  // Stagger direct .fade-up-child elements inside the revealed parent
  const staggerChildren = el.querySelectorAll('.fade-up-child')
  staggerChildren.forEach((child, i) => {
    const base = parseFloat(child.dataset.staggerBase || 0)
    child.style.animationDelay = `${base + i * 0.08}s`
    child.classList.add('visible')
  })
}
