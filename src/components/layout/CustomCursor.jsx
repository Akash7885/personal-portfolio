import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Dot + ring custom cursor. Ring lags behind the dot with a spring,
 * and scales up with a glow when hovering interactive elements.
 */
export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(true) // assume touch until proven otherwise, so nothing extra mounts on mobile
  const dotX = useMotionValue(0)
  const dotY = useMotionValue(0)
  const ringX = useSpring(dotX, { damping: 25, stiffness: 300, mass: 0.5 })
  const ringY = useSpring(dotY, { damping: 25, stiffness: 300, mass: 0.5 })

  useEffect(() => {
    const touchDevice = window.matchMedia('(hover: none)').matches
    setIsTouch(touchDevice)
    if (touchDevice) return

    const move = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const isInteractive = (el) =>
      el.closest('a, button, [role="button"], input, textarea, .magnetic')

    const over = (e) => setIsHovering(Boolean(isInteractive(e.target)))

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [dotX, dotY, isVisible])

  if (isTouch) return null

  return (
    <div className={`pointer-events-none fixed inset-0 z-[999] hidden md:block transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent-secondary"
        animate={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          opacity: isHovering ? 0.9 : 0.5,
          boxShadow: isHovering ? '0 0 24px rgba(139,92,246,0.5)' : '0 0 0px rgba(139,92,246,0)',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </div>
  )
}
