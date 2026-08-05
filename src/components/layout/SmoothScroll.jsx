import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenisInstance } from '../../utils/lenisInstance'


export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchMultiplier: 1.5,
    })

    setLenisInstance(lenis)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      setLenisInstance(null)
      lenis.destroy()
    }
  }, [])

  return children
}
