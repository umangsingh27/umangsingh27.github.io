import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = forwardRef(({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // primary, secondary, text, outline, tab
  size = 'medium', // small, medium, large
  isMagnetic = true,
  className = '',
  disabled = false,
  type = 'button',
  download,
  target,
  rel,
  ...props
}, ref) => {
  const baseClass = 'btn'
  const variantClass = `btn--${variant}`
  const sizeClass = `btn--${size}`
  const magneticClass = isMagnetic ? 'magnetic-pull' : ''
  
  const combinedClasses = `${baseClass} ${variantClass} ${sizeClass} ${magneticClass} ${className}`.trim()

  // If "to" is provided, it's a React Router Link
  if (to) {
    return (
      <Link 
        to={to} 
        className={combinedClasses} 
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    )
  }

  // If "href" is provided, it's a standard anchor
  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        download={download}
        target={target}
        ref={ref}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...props}
      >
        {children}
      </a>
    )
  }

  // Otherwise, it's a regular button
  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
