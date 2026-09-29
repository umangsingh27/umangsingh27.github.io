import { useEffect, useRef, useState } from 'react'
import './CaseStudyToc.css'

export default function CaseStudyToc() {
  const [sections, setSections] = useState([])
  const [active, setActive] = useState(-1)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    const found = [...document.querySelectorAll('main .case-section')]
      .map((el, i) => {
        const heading = el.querySelector('h2')
        if (!heading) return null
        if (!el.id) el.id = `section-${i + 1}`
        return { id: el.id, title: heading.textContent.trim(), el }
      })
      .filter(Boolean)

    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)

      const probe = window.innerHeight * 0.35
      let idx = -1
      found.forEach((s, i) => {
        if (s.el.getBoundingClientRect().top <= probe) idx = i
      })
      setActive(idx)

      const end = document.querySelector('.next-project-card') || document.querySelector('footer')
      const endTop = end?.getBoundingClientRect().top ?? Infinity
      const shouldShow = idx >= 0 && endTop > window.innerHeight - 80
      let overlapsContent = false
      const root = rootRef.current
      if (shouldShow && root) {
        const toggle = root.querySelector('.case-toc__toggle')
        const rect = toggle?.getBoundingClientRect()
        if (rect) {
          root.style.visibility = 'hidden'
          const underneath = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2)
          root.style.visibility = ''
          overlapsContent = Boolean(underneath?.closest('.case-section__inner'))
        }
      }
      const nextVisible = shouldShow && !overlapsContent
      setVisible(nextVisible)
      if (!shouldShow) setOpen(false)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    frame = requestAnimationFrame(() => {
      setSections(found)
      update()
    })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const onClick = (e) => { if (!rootRef.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onClick)
    }
  }, [open])

  if (sections.length === 0) return null

  const jumpTo = (section) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    section.el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    setOpen(false)
  }

  const current = sections[Math.max(active, 0)]
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <nav
      ref={rootRef}
      className={`case-toc${visible ? ' is-visible' : ''}${open ? ' is-open' : ''}`}
      aria-label="Case study sections"
    >
      {open && (
        <ol className="case-toc__list" id="case-toc-list">
          {sections.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                className="case-toc__item"
                aria-current={i === active ? 'true' : undefined}
                onClick={() => jumpTo(s)}
              >
                <span className="case-toc__item-num">{pad(i + 1)}</span>
                <span>{s.title}</span>
              </button>
            </li>
          ))}
        </ol>
      )}
      <button
        type="button"
        className="case-toc__toggle"
        aria-expanded={open}
        aria-controls={open ? 'case-toc-list' : undefined}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="case-toc__count">{pad(Math.max(active, 0) + 1)} / {pad(sections.length)}</span>
        <span className="case-toc__title">{current.title}</span>
        <span className="case-toc__chevron" aria-hidden="true" />
        <span className="case-toc__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      </button>
    </nav>
  )
}
