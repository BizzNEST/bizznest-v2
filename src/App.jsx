import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './sections/Home'
import CaseStudyPage from './sections/CaseStudyPage'
import ContactPage from './sections/ContactPage'

// On route changes: scroll to a hashed section if present, otherwise scroll to top.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Let React finish rendering the destination page before measuring.
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}
