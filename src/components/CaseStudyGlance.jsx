import './CaseStudyGlance.css'

export default function CaseStudyGlance({ stats }) {
  return (
    <div className="case-glance" role="list" aria-label="Key results">
      {stats.map((stat) => (
        <div className="case-glance__item" role="listitem" key={stat.label}>
          <span className="case-glance__value">{stat.value}</span>
          <span className="case-glance__label">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
