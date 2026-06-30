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
  const { pathname, hash } = useLocation()
  const navType = useNavigationType()
  useEffect(() => {
    if (navType === 'POP') return
    if (hash) {
      // Let React finish rendering the destination page before measuring.
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, navType])
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
