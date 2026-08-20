import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import Home from './sections/Home'

// Page routes are lazy-loaded so the homepage doesn't ship their code up front.
const CaseStudyPage = lazy(() => import('./sections/CaseStudyPage'))
const ContactPage = lazy(() => import('./sections/ContactPage'))
const ServicePage = lazy(() => import('./sections/ServicePage'))

// On route changes: scroll to a hashed section if present, otherwise scroll to top.
// On back/forward (POP) navigation, do nothing so the browser restores the
// previous scroll position instead of us forcing the page to the top.
function ScrollToTop() {
  // `key` is unique per history entry, so re-clicking a link to the section
  // you're already on still re-fires this effect. Keying only on pathname+hash
  // made the second click a no-op.
  const { pathname, hash, key } = useLocation()
  const navType = useNavigationType()
  useEffect(() => {
    if (navType === 'POP') return
    if (hash) {
      // Let React finish rendering the destination page before measuring.
      const id = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 0)
      return () => clearTimeout(id)
    }
    // `instant` is required: global `scroll-behavior: smooth` would otherwise
    // animate this, scrolling the outgoing page all the way up on every nav.
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key, navType])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
