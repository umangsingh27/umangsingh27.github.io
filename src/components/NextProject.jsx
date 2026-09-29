import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'
import Icon from './Icon'
import './NextProject.css'

export default function NextProject({ to, tag, title, metric, image, imageAlt }) {
  return (
    <Link to={to} className="next-project-card">
      <div className="next-project-card__cover">
        <LazyImage
          src={image}
          alt={imageAlt}
          sizes="(max-width: 768px) 100vw, 1100px"
          imgStyle={{ height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="next-project-card__meta">
        <span className="next-project-card__label">Next case study</span>
        <span className="next-project-card__tag">{tag}</span>
        <h3 className="next-project-card__title">{title}</h3>
        {metric && <div className="next-project-card__metric">{metric}</div>}
        <span className="next-project-card__cta">View case study <Icon name="arrowRight" size={17} /></span>
      </div>
    </Link>
  )
}
