import GlowEffect from './components/GlowEffect'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import SelectedWork from './components/SelectedWork'
import About from './components/About'
import Milestones from './components/Milestones'
import Services from './components/Services'
import Team from './components/Team'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <GlowEffect />
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <SelectedWork />
        <About />
        <Milestones />
        <Services />
        <Team />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
