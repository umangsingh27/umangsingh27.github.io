const paths = {
  systems: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="8.5" y="14" width="7" height="7" rx="1.5" /><path d="M6.5 10v2h11v-2M12 12v2" /></>,
  field: <><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /><path d="M3 21h4m10 0h4" /></>,
  iterate: <><path d="M5 8a8 8 0 0 1 13.6-2.7L21 8" /><path d="M21 3v5h-5" /><path d="M19 16a8 8 0 0 1-13.6 2.7L3 16" /><path d="M3 21v-5h5" /><path d="m9 12 2 2 4-4" /></>,
  ai: <><circle cx="5" cy="12" r="2" /><circle cx="18" cy="5" r="2" /><circle cx="18" cy="19" r="2" /><path d="M7 12h5m2-1 2.5-4M14 13l2.5 4" /><rect x="12" y="10" width="4" height="4" rx="1" /></>,
  book: <><path d="M12 5.5C9.5 4 6.5 3.7 3 4v15c3.5-.3 6.5 0 9 1.5M12 5.5c2.5-1.5 5.5-1.8 9-1.5v15c-3.5-.3-6.5 0-9 1.5V5.5Z" /></>,
  build: <><path d="M14.5 4.5a5 5 0 0 0-6.4 6.4L3 16.5 7.5 21l6.1-5.1a5 5 0 0 0 6.4-6.4l-3.4 3.4-3.5-.5-.5-3.5 3.4-3.4Z" /></>,
  speaking: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M6 11a6 6 0 0 0 12 0M12 17v4m-4 0h8" /></>,
  trophy: <><path d="M7 3h10v8a5 5 0 0 1-10 0V3ZM7 5H4v3a3 3 0 0 0 3 3m10-6h3v3a3 3 0 0 1-3 3m-5 5v3m-4 2h8" /></>,
  teaching: <><path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v5c3.4 2.7 8.6 2.7 12 0v-5M22 9v7" /></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  close: <><path d="M5 5l14 14M19 5 5 19" /></>,
  minus: <path d="M4 12h16" />,
  plus: <path d="M12 4v16M4 12h16" />,
  download: <><path d="M12 3v12m-4-4 4 4 4-4M4 17v3h16v-3" /></>,
  play: <path d="m9 5 10 7-10 7V5Z" />,
  arrowRight: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
  arrowLeft: <><path d="M20 12H4m6-6-6 6 6 6" /></>,
  arrowUpRight: <><path d="M5 19 19 5M8 5h11v11" /></>,
  arrowUp: <><path d="M12 20V4m-6 6 6-6 6 6" /></>,
}

export default function Icon({ name, size = 24, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  )
}
