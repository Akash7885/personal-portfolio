// Central place for section/navigation config so Navbar, ScrollSpy,
// and any other component referencing section IDs stay in sync.

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const SECTION_IDS = ['home', ...NAV_LINKS.map((l) => l.id)]
