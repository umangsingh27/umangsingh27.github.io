import { useEffect, useState } from 'react'
import './Resume.css'
import Button from '../components/Button'

const MOBILE_QUERY = '(max-width: 767px)'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const onChange = (e) => setIsMobile(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume — Umang Singh'
  }, [])

  const isMobile = useIsMobile()
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`
  const previewUrl = `${import.meta.env.BASE_URL}resume-preview.webp`

  if (isMobile) {
    return (
      <main className="resume-page">
        <div className="resume-mobile">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-mobile__preview"
            aria-label="Open resume PDF in a new tab"
          >
            <img
              src={previewUrl}
              alt="Preview of Umang Singh's resume"
              width="1400"
              height="1978"
              decoding="async"
            />
          </a>
          <div className="resume-mobile__actions">
            <Button href={resumeUrl} download="Umang_Singh_Resume.pdf" variant="primary">
              Download PDF
            </Button>
            <Button href={resumeUrl} target="_blank" variant="secondary">
              Open full screen
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="resume-page">
      <div className="resume-viewer">
        <div className="resume-viewer__stage">
          <div className="resume-viewer__embed-wrap">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Open resume PDF in a new tab">
              <img
                src={previewUrl}
                className="resume-viewer__preview"
                alt="Preview of Umang Singh's resume"
                width="1400"
                height="1978"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="resume-float-bar">
        <Button href={resumeUrl} target="_blank" variant="glass" className="resume-float-bar__action">
          Open PDF
        </Button>
        <Button
          href={resumeUrl}
          download="Umang_Singh_Resume.pdf"
          className="resume-float-bar__action resume-float-bar__download"
          variant="glass"
        >
          Download PDF
        </Button>
      </div>
    </main>
  )
}
