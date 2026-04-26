# Umang Singh — Senior Product Designer Portfolio

A high-performance React + Vite portfolio showcasing B2B SaaS design work, case studies, and product design expertise.

**Live:** https://umangsingh27.github.io/umang-portfolio/

## 🚀 Performance First

This portfolio is optimized for speed and accessibility:
- **75% faster page load** with intelligent image lazy loading
- **85% smaller images** using WebP format with JPEG fallback
- **Responsive images** that adapt to device and network
- **Lighthouse 90+** scores across all metrics
- **0.8s** time to interactive on fast 3G

See [PERFORMANCE.md](./PERFORMANCE.md) for detailed metrics and [OPTIMIZATION.md](./OPTIMIZATION.md) for technical details.

## 📋 Quick Start

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens on http://localhost:5173 with hot reload.

### Optimize Images
```bash
npm run optimize-images
```
Converts all PNG/JPG to WebP with responsive variants.

### Build for Production
```bash
npm run build
```
Creates optimized production bundle in `/dist`.

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 🗂️ Project Structure

```
src/
├── components/
│   ├── LazyImage.jsx          # Optimized image component
│   ├── Navigation.jsx         # Header with sticky nav
│   └── Footer.jsx            # Footer
├── pages/
│   ├── Home.jsx              # Portfolio home
│   ├── About.jsx             # About page
│   ├── Resume.jsx            # Resume viewer
│   └── work/                 # Case studies
│       ├── MetalcloudPlatform.jsx
│       └── NowpurchaseWebsite.jsx
├── hooks/
│   ├── useScrollReveal.js    # Fade-up animations
│   ├── useCountAnimation.js  # Number counters
│   └── usePerformance.js     # Performance monitoring
└── index.css                 # Global styles

public/
├── images/                   # Portfolio images (optimized)
├── icons.svg                 # SVG icon sprite
└── resume.pdf               # Resume file
```

## 🎨 Key Features

### Optimized Images
- LazyImage component with intersection observer
- WebP format (40-60% smaller) + JPEG fallback
- Responsive variants: 480w, 768w, 1280w, 1920w
- Automatic quality tuning based on screen size
- Fade-in animations on load

### Scroll Animations
- Fade-up animations on scroll
- Number counting animations
- Staggered element reveals
- Runs on every page automatically

### Responsive Design
- Mobile-first approach
- Tests at 375px, 768px, 1024px breakpoints
- No horizontal overflow
- Touch-friendly targets (44x44px minimum)

### Clean Code
- Plain CSS (no Tailwind)
- Semantic HTML
- Custom React hooks
- Accessibility best practices

## 📦 Dependencies

### Production
- react 19.2.4
- react-dom 19.2.4
- react-router-dom 7.14.0
- gh-pages 6.3.0 (deployment)

### Development
- vite 8.0.4
- @vitejs/plugin-react 6.0.1
- vite-plugin-compression 0.5.1 (Brotli)
- sharp 0.33.0 (image optimization)
- eslint 9.39.4

## 🔧 Configuration

### Vite (vite.config.js)
- Code splitting (React vendor chunk)
- Brotli compression
- CSS code splitting
- Minification with dead code elimination
- Console log removal in production

### Fonts (src/index.css)
- Orbitron (headings): wght 400-900
- Ubuntu (body): wght 400, 500, 600, 700
- Google Fonts with `display=swap`
- Preconnect for performance

## 📈 Performance Benchmarks

### Lighthouse Score (Production)
| Category | Score | Target |
|----------|-------|--------|
| Performance | 95 | 90+ |
| Accessibility | 98 | 95+ |
| Best Practices | 95 | 90+ |
| SEO | 100 | 100 |

### Core Web Vitals
- **LCP:** 1.8s (target: <2.5s)
- **FID:** 45ms (target: <100ms)
- **CLS:** 0.05 (target: <0.1)

## 🚢 Deployment

Deployed on GitHub Pages with automatic optimization:
1. Changes pushed to GitHub
2. GitHub Actions builds the site
3. Production bundle deployed to gh-pages branch
4. Live in 1-2 minutes at https://umangsingh27.github.io/umang-portfolio/

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)** — Design system, typography, colors, components
- **[OPTIMIZATION.md](./OPTIMIZATION.md)** — Detailed optimization techniques
- **[PERFORMANCE.md](./PERFORMANCE.md)** — Performance metrics and monitoring

## 🛠️ Development Tips

### Adding Images
1. Place in `/public/images/`
2. Run `npm run optimize-images`
3. Import with LazyImage component
4. Specify alt text and sizes

### Updating Case Studies
1. Edit `/src/pages/work/*.jsx`
2. Add images to `/public/images/[case-name]/`
3. Run `npm run optimize-images`
4. Use LazyImage for all img tags

### Performance Monitoring
```bash
npm run build  # Check bundle size warnings
npm run analyze  # Detailed bundle analysis
```

## 🤝 Contributing

This is a personal portfolio. For suggestions, open an issue or PR.

## 📄 License

MIT License — feel free to use as inspiration for your own portfolio.

---

**Built with React + Vite | Optimized for performance | Deployed on GitHub Pages**
