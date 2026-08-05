import { useState } from 'react'
import Loader from './components/layout/Loader'
import CustomCursor from './components/layout/CustomCursor'
import SmoothScroll from './components/layout/SmoothScroll'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  )
}
