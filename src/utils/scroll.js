import { getLenisInstance } from './lenisInstance'

// A small breathing-room buffer only — NOT the full navbar height.
// Every section already has its own top padding (py-20/py-28) which is
// what actually clears the fixed navbar when scrolled to the section's
// top edge. Adding the full navbar height *again* here would double up
// with that padding and create a large empty gap above every section's
// heading (exactly what showed up as a visible gap under the navbar).
const SCROLL_BUFFER = 12

/**
 * Smoothly scrolls to a section by its DOM id. Routes through the active
 * Lenis instance when available (required for it to work correctly,
 * especially on touch/mobile — see lenisInstance.js for why), and falls
 * back to native scrollIntoView if Lenis hasn't initialized yet.
 */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return

  const lenis = getLenisInstance()
  if (lenis) {
    lenis.scrollTo(el, { offset: -SCROLL_BUFFER, duration: 1.2 })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_BUFFER
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

/** Scrolls the window to the very top (used by "back to top" controls). */
export function scrollToTop() {
  const lenis = getLenisInstance()
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.2 })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
