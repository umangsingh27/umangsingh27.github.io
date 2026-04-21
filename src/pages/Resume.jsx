import { useEffect, useState } from 'react'
import './Resume.css'

const ZOOM_STEPS = [50, 75, 100, 125, 150, 175, 200]

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume — Umang Singh'
  }, [])

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

  // null = page-fit (whole page visible), number = percentage
  const [zoom, setZoom] = useState(null)

  const iframeSrc = zoom === null
    ? `${resumeUrl}#toolbar=0&zoom=page-fit`
    : `${resumeUrl}#toolbar=0&zoom=${zoom}`

  const zoomLabel = zoom === null ? 'Fit' : `${zoom}%`

  const handleZoomIn = () => {
    setZoom(prev => {
      const base = prev === null ? 100 : prev
      const next = ZOOM_STEPS.find(z => z > base)
      return next ?? prev
    })
  }

  const handleZoomOut = () => {
    setZoom(prev => {
      const base = prev === null ? 100 : prev
      const next = [...ZOOM_STEPS].reverse().find(z => z < base)
      return next ?? prev
    })
  }

  return (
    <main className="resume-page">

      {/* ── PDF Viewer ── */}
      <div className="resume-viewer">
        <div className="resume-viewer__stage">
          <div className="resume-viewer__embed-wrap">
            <iframe
              key={iframeSrc}
              src={iframeSrc}
              className="resume-viewer__embed"
              title="Umang Singh Resume"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* ── Floating controls ── */}
      <div className="resume-float-bar">
        <button
          className="resume-float-bar__btn"
          onClick={handleZoomOut}
          aria-label="Zoom out"
          disabled={zoom !== null && zoom <= ZOOM_STEPS[0]}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        </button>

        <button
          className="resume-float-bar__zoom-label"
          onClick={() => setZoom(null)}
          title="Reset to fit page"
        >
          {zoomLabel}
        </button>

        <button
          className="resume-float-bar__btn"
          onClick={handleZoomIn}
          aria-label="Zoom in"
          disabled={zoom !== null && zoom >= ZOOM_STEPS[ZOOM_STEPS.length - 1]}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="resume-float-bar__divider" aria-hidden="true" />

        <a
          href={resumeUrl}
          download="Umang_Singh_Resume.pdf"
          className="resume-float-bar__btn resume-float-bar__download"
          title="Download PDF"
          aria-label="Download"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M7.5 1.5v8M4 7l3.5 3.5L11 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.5 11.5v1A1.5 1.5 0 003 14h9a1.5 1.5 0 001.5-1.5v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          Download
        </a>
      </div>

    </main>
  )
}
