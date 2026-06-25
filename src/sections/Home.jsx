import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProject from '../components/FeaturedProject'
import SelectedWork from '../components/SelectedWork'
import About from '../components/About'
import Milestones from '../components/Milestones'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import LoadIntro from '../components/LoadIntro'

export default function Home() {
  return (
    <>
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
      </main>
      <Footer />
      <LoadIntro />
    </>
  )
}
