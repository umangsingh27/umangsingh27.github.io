import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import AiSalesAgent from './pages/work/AiSalesAgent'
import DesignSystem from './pages/work/DesignSystem'
import MetalcloudPlatform from './pages/work/MetalcloudPlatform'
import NowpurchaseWebsite from './pages/work/NowpurchaseWebsite'

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Home />} />
        <Route path="/work/ai-sales-agent" element={<AiSalesAgent />} />
        <Route path="/work/design-system" element={<DesignSystem />} />
        <Route path="/work/metalcloud-platform" element={<MetalcloudPlatform />} />
        <Route path="/work/nowpurchase-website" element={<NowpurchaseWebsite />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
