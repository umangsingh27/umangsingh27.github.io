import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'
import DesignSystem from './pages/work/DesignSystem'
import MetalcloudPlatform from './pages/work/MetalcloudPlatform'
import NowpurchaseWebsite from './pages/work/NowpurchaseWebsite'
import './App.css'

const redirectPath = window.sessionStorage.getItem('redirect')
if (redirectPath) {
  window.sessionStorage.removeItem('redirect')
  if (redirectPath.startsWith('/') && !redirectPath.startsWith('//')) {
    window.history.replaceState(null, '', redirectPath)
  }
}

function AppContent() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <div id="main-content" className="route-content" tabIndex="-1" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Home />} />
          <Route path="/work/design-system" element={<DesignSystem />} />
          <Route path="/work/metalcloud-platform" element={<MetalcloudPlatform />} />
          <Route path="/work/nowpurchase-website" element={<NowpurchaseWebsite />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter basename="/">
      <AppContent />
    </BrowserRouter>
  )
}

export default App
