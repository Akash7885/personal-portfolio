// Holds a reference to the single active Lenis instance created in
// SmoothScroll.jsx. Anything that needs to scroll the page programmatically
// (nav links, "back to top", etc.) must go through Lenis rather than native
// `scrollIntoView`/`window.scrollTo` — Lenis intercepts and re-drives scroll
// itself, so a native scroll call fights it instead of cooperating with it.
// That conflict is what breaks tap-to-navigate on mobile: Lenis's touch
// scroll handling overrides the native jump before it visually completes.
let lenisInstance = null

export function setLenisInstance(instance) {
  lenisInstance = instance
}

export function getLenisInstance() {
  return lenisInstance
}
