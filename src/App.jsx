import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './sections/Home'
import CaseStudyPage from './sections/CaseStudyPage'

// Reset scroll to top whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
      </Routes>
    </>
  )
}
