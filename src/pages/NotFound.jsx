import { useEffect } from 'react'
import Button from '../components/Button'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found — Umang Singh'
  }, [])

  return (
    <section style={{ padding: '160px 24px 120px', textAlign: 'left', maxWidth: '680px', margin: '0 auto' }}>
      <p style={{
        fontFamily: 'var(--font-family-heading)',
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--color-accent)',
        marginBottom: '16px'
      }}>404</p>
      <h1 style={{ marginBottom: '16px' }}>Page not found</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button to="/" variant="primary">Back to work</Button>
    </section>
  )
}
