import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import { personalInfo, typewriterWords } from '../../data/portfolioData'
import AnimatedButton from '../ui/AnimatedButton'
import ProfileShowcase from '../ui/ProfileShowcase'
import { scrollToId } from '../../utils/scroll'

function useTypewriter(words, typingSpeed = 70, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? currentWord.slice(0, t.length - 1) : currentWord.slice(0, t.length + 1)
        )
      }, deleting ? typingSpeed / 2 : typingSpeed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(typewriterWords)

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden noise"
      aria-label="Introduction"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <div className="absolute -top-32 -left-32 w-[20rem] sm:w-[28rem] h-[20rem] sm:h-[28rem] bg-accent/30 rounded-full blur-[90px] sm:blur-[120px] animate-blob" />
      <div className="absolute -bottom-32 -right-20 w-[18rem] sm:w-[26rem] h-[18rem] sm:h-[26rem] bg-accent-secondary/30 rounded-full blur-[90px] sm:blur-[120px] animate-blob" style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />

      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: Math.random() > 0.8 ? 2 : 1,
              height: Math.random() > 0.8 ? 2 : 1,
              opacity: Math.random() * 0.6 + 0.2,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-12 items-center pt-32 pb-24 lg:py-20 w-full">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start text-left"
        >
          <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-accent-secondary mb-4 sm:mb-5">
            Welcome to my portfolio
          </span>

          <h1 className="font-display text-3xl sm:text-3xl md:text-5xl lg:text-[4rem] xl:text-7xl font-bold leading-[1.1] mb-3 sm:mb-4">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="min-h-[40px] md:min-h-[48px] mb-4 sm:mb-5 w-full">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-text-secondary leading-tight sm:leading-normal">
              <span className="text-text">{typed}</span>
              <span className="inline-block w-[2px] h-4 sm:h-5 md:h-6 bg-accent ml-1 align-middle animate-pulse" />
            </p>
          </div>

          <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-full sm:max-w-lg mb-8 sm:mb-10">
            {personalInfo.careerObjective}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto mb-10 sm:mb-12">
            <AnimatedButton onClick={() => scrollToId('projects')} className="w-full sm:w-auto text-center justify-center">
              View Projects
            </AnimatedButton>
            <AnimatedButton as="a" href={personalInfo.resumeFile} download variant="outline" className="w-full sm:w-auto text-center justify-center">
              <Download size={16} className="mr-2" /> Download Resume
            </AnimatedButton>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 mb-8 lg:mb-12">
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="magnetic w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full glass hover:shadow-glow hover:text-accent transition-all focus-ring"
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: profile visual — avatar ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end mt-4 lg:mt-0 w-full"
        >
          <ProfileShowcase />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToId('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-text-secondary focus-ring hidden sm:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown size={16} className="sm:w-[18px] sm:h-[18px]" />
      </motion.button>
    </section>
  )
}