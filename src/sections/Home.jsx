import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProject from '../components/FeaturedProject'
import SelectedWork from '../components/SelectedWork'
import About from '../components/About'
import Services from '../components/Services'
import Partners from '../components/Partners'
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
        <Services />
        <Partners />
        <Team />
        <CTA />
        <Testimonials />
        <About />
      </main>
      <Footer />
      <LoadIntro />
    </>
  )
}
