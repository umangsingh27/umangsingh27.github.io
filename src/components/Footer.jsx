import { Link } from 'react-router-dom'
import Icon from './Icon'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="mailto:mail2umangsingh@gmail.com" className="footer-link">
            mail2umangsingh@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/umangsingh123/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <Link to="/resume" className="footer-link">
            Resume
          </Link>
        </div>
        <div className="footer-meta">
          <p className="footer-copy">© {new Date().getFullYear()} Umang Singh</p>
          <button type="button" className="footer-top" onClick={scrollToTop}>
            Back to top <Icon name="arrowUp" size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
