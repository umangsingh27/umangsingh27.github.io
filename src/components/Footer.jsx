import './Footer.css'

export default function Footer() {
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
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Umang Singh</p>
      </div>
    </footer>
  )
}
