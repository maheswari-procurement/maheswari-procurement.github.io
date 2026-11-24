import { useState } from 'react'
import Experience from './components/Experience'
import FlagshipWorks from './components/FlagshipWorks'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Leadership from './components/Leadership'
import Nav from './components/Nav'
import Process from './components/Process'
import ResumeModal from './components/ResumeModal'
import Skills from './components/Skills'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  // #resume opens the interactive resume directly
  const [resumeOpen, setResumeOpen] = useState(() => location.hash === '#resume')
  const openResume = () => setResumeOpen(true)

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggle} onOpenResume={openResume} />
      <main id="main">
        <Hero onOpenResume={openResume} />
        <FlagshipWorks />
        <Impact />
        <Leadership />
        <Process />
        <Experience />
        <Skills />
      </main>
      <Footer onOpenResume={openResume} />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}
