import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, heroStats } from '../../data/portfolioData'

function initialsOf(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function StatNumber({ value, delay = 0 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let raf
    let start
    const duration = 1200
    const tick = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    const t = setTimeout(() => (raf = requestAnimationFrame(tick)), delay)
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf)
    }
  }, [value, delay])

  return <span>{count}+</span>
}

export default function ProfileShowcase() {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
      {/* Avatar + spinning ring  */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80  mx-auto shrink-0">
        {/* Spinning conic-gradient ring */}
        <div
          className="absolute inset-0 rounded-full animate-spin-slow"
          style={{
            background: 'conic-gradient(from 0deg, #3B82F6, #94D425, #3B82F6)',
          }}
        />
        {/* Mask to turn the gradient disc into a thin ring */}
        <div className="absolute inset-[3px] sm:inset-[4px] rounded-full bg-bg" />

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-[6px] sm:inset-[8px] rounded-full bg-gradient-to-br from-card to-bg-secondary border-[3px] sm:border-4 border-bg overflow-hidden flex items-center justify-center shadow-glow z-10"
        >
          {personalInfo.profileImage ? (
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black gradient-text">
              {initialsOf(personalInfo.name)}
            </span>
          )}
        </motion.div>
      </div>

      {/* Mini stats card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass gradient-border rounded-2xl px-4 sm:px-6 py-4 sm:py-5 w-full max-w-[280px] sm:max-w-lg lg:max-w-md xl:max-w-lg shadow-glow mt-2 sm:mt-0"
      >
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 sm:grid-cols-4 sm:gap-y-0 sm:gap-x-0 sm:divide-x sm:divide-white/10">
          {heroStats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center justify-center gap-1 px-1 sm:px-2 text-center">
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-black gradient-text">
                <StatNumber value={s.value} delay={i * 150} />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-text-secondary text-center leading-tight tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}