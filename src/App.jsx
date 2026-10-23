import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Education from './components/Education'
import Services from './components/Services'
import TechStack from './components/TechStack'
import WorkEnv from './components/WorkEnv'
import Projects from './components/Projects'
import IndependentWork from './components/IndependentWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Education />
        <Services />
        <TechStack />
        <WorkEnv />
        <Projects />
        <IndependentWork />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
