import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import useScrollSpy from '../../hooks/useScrollSpy'
import { NAV_LINKS } from '../../constants/navigation'
import { scrollToId, scrollToTop } from '../../utils/scroll'

const NAV_IDS = NAV_LINKS.map((l) => l.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(NAV_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    scrollToId(id)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="section-container flex items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
          className="font-display text-xl font-bold gradient-text focus-ring magnetic"
        >
          Akash Dabhi
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors focus-ring ${
                  activeId === link.id ? 'text-text' : 'text-text-secondary hover:text-text'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-primary rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold shadow-glow hover:scale-105 transition-transform focus-ring magnetic"
        >
          Let's Talk
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text focus-ring"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left py-3 text-base font-medium focus-ring ${
                      activeId === link.id ? 'gradient-text' : 'text-text-secondary'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
