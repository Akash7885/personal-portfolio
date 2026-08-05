import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { scrollToTop } from '../../utils/scroll'

export default function Footer() {
  const socials = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-lg font-bold gradient-text">Akash Dabhi</span>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="magnetic text-text-secondary hover:text-accent transition-colors focus-ring"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ y: -3 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="magnetic flex items-center justify-center w-10 h-10 rounded-full glass hover:shadow-glow transition-shadow focus-ring"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>

      <p className="text-center text-xs text-text-secondary mt-8">
        © {new Date().getFullYear()} Akash Dabhi. All rights reserved.
      </p>
    </footer>
  )
}
